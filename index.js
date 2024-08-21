require('dotenv').config();  // تحميل المتغيرات من ملف .env
const fs = require('fs');
const path = require('path');
const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates] });
const app = express();

// إعداد الخادم Express
app.get('/', (req, res) => {
    res.send(`
    <body>
    <center><h1>Logs Project</h1><p>DEV BY : DXRKN <span style="animation: rainbow 3s ease-in-out infinite;">24/7</span></p>
    <style>
    @keyframes rainbow {
        0% { color: red; }
        25% { color: orange; }
        50% { color: yellow; }
        75% { color: green; }
        100% { color: blue; }
    }
    </style>
    </center>
    </body>`);
});

// بدء تشغيل خادم Express على المنفذ 3000
app.listen(3000, () => console.log("I'm Ready To Work..!"));

// تحميل الأوامر
client.commands = new Map();
const commandsPath = path.join(__dirname, 'commands');
const loadCommands = (dir) => {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        const filePath = path.join(dir, file.name);
        if (file.isDirectory()) {
            loadCommands(filePath);
        } else if (file.name.endsWith('.js')) {
            const command = require(filePath);
            client.commands.set(command.name, command);
        }
    }
};
loadCommands(commandsPath);

// تحميل الأحداث
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

// تسجيل الدخول للبوت باستخدام التوكن من .env
client.login(process.env.TOKEN);