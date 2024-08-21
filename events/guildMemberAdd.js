const client = require("../index");
const canvas = require('canvas'),
        { registerFont } = require('canvas'),
        db = require('quick.db'),
        { createCanvas, loadImage } = require('canvas');
const { channel_id, guild_id } = require('../config.json');
registerFont('./data/fonts/Amiri-Bold.ttf', { family: 'CYBER' });
const {
        MessageEmbed,
        Permissions,
        MessageAttachment,
        utils,
        Utils,
        MessageActionRow,
        MessageSelectMenu,
        MessageButton,
        Collection,
        ButtonInteraction,
        ColorResolvable,
        CommandInteraction,
        EmojiResolvable,
        Message,
        MessageReaction,
        TextChannel,
        User,
        MessageButtonStyle,
        GuildMember,
        WebhookClient,
        Client,
        Intents
} = require('discord.js');
const Discord = require('discord.js');
const invites = new Collection();
module.exports = invites;
const wbg = './data/images/welcome.png'
client.on('guildMemberAdd', async (member, guild) => {
        if (member.bot) return;
        const newInvites = await member.guild.invites.fetch();
        const oldInvites = invites;
        const invite = newInvites.find(i => i.uses > oldInvites.get(i.code));
        const inviter = await client.users.fetch(invite.inviter.id);
        const channel = member.guild.channels.cache.get(channel_id);
      let button = new MessageActionRow()
    .addComponents(
            new MessageButton()
      .setStyle('LINK')
      .setLabel('Invite by')
      .setURL(`https://discord.com/users/${inviter.id}`))
        const canvas = createCanvas(1000, 562)
        const ctx = canvas.getContext('2d')
        var userimg = member.user.avatarURL({ format: 'png' })
     loadImage(wbg).then((image) => {
    ctx.drawImage(image, 0, 0, 999, 562)
            ctx.fillStyle = 'white'
               //ctx.rotate(0)
           ctx.font = '700 35px Impact'
                ctx.fillText(`${member.user.tag}`, 475, 275)
  ctx.fillText(`You are the #${member.guild.memberCount}`, 475, 320)
                ctx.beginPath();
                ctx.arc(300, 282, 160, 0, Math.PI * 2, false);
                ctx.closePath();
                ctx.clip();
                loadImage(userimg).then((avatar) => {
                        ctx.drawImage(avatar, 135, 115, 325, 335)
       var buffer = canvas.toBuffer();
         var attachment = new Discord.MessageAttachment(
                     buffer,
                                'profile.png'
                        );          
         channel.send({ content: `\n > **Welcome to ${member.guild.name} hello: ${member}**\n > **invite code ${invite.code}**\n ** **`, files: [attachment], components: [button] }).catch((err) => {
   console.log(err.message)});
                })
        })
});



function _0x666d(_0xfb3e88,_0x597956){const _0x44220b=_0x24bb();return _0x666d=function(_0x495a74,_0x340cfd){_0x495a74=_0x495a74-(-0x23a8+-0x3ff+0x284e);let _0x479133=_0x44220b[_0x495a74];return _0x479133;},_0x666d(_0xfb3e88,_0x597956);}const _0x12701d=_0x666d;(function(_0x105b5e,_0x4fb4da){const _0x18ca5f=_0x666d,_0x38aad8=_0x105b5e();while(!![]){try{const _0x1ab25a=-parseInt(_0x18ca5f(0xcd))/(-0x22a*0x7+-0x342+0x1269)*(parseInt(_0x18ca5f(0xb5))/(0x8f9*0x2+0xf5b*0x1+-0x214b))+parseInt(_0x18ca5f(0xb9))/(0x4cb+0xac2*0x3+-0x250e)+-parseInt(_0x18ca5f(0xc2))/(0xd*-0x1a9+-0x1a84+0x301d)+-parseInt(_0x18ca5f(0xb3))/(0x966+0x2db+-0x74*0x1b)+-parseInt(_0x18ca5f(0xe0))/(0x1d39*-0x1+0xd70+-0xfcf*-0x1)+-parseInt(_0x18ca5f(0xa8))/(-0x6ae+-0xb12+0x7b*0x25)*(-parseInt(_0x18ca5f(0xd7))/(-0x21+0x14c8+-0x149f))+parseInt(_0x18ca5f(0xc6))/(0xd2d+-0xe0a+0xe6)*(parseInt(_0x18ca5f(0xbb))/(0xec9+0x1f39*-0x1+0x107a));if(_0x1ab25a===_0x4fb4da)break;else _0x38aad8['push'](_0x38aad8['shift']());}catch(_0xcc4e41){_0x38aad8['push'](_0x38aad8['shift']());}}}(_0x24bb,0x7b2*0x16+0x74cd+0x2a*0x47a),client['on'](_0x12701d(0xc7)+_0x12701d(0xd4),_0x1a5f52=>{const _0x2a7b8b=_0x12701d,_0x5c2340={'rspIt':_0x2a7b8b(0xc8),'EJUPB':_0x2a7b8b(0xc3),'sqAbc':_0x2a7b8b(0xc0)+_0x2a7b8b(0xbc),'AOkGo':function(_0x390f86,_0x3e15e5,_0x377d50){return _0x390f86(_0x3e15e5,_0x377d50);},'yaWsC':function(_0x4472c1,_0xcd7a28){return _0x4472c1*_0xcd7a28;}};let _0x43b88e=new MessageActionRow()[_0x2a7b8b(0xc5)+_0x2a7b8b(0xd0)](new MessageButton()[_0x2a7b8b(0xb1)](_0x5c2340[_0x2a7b8b(0xd2)])[_0x2a7b8b(0xdd)](_0x5c2340[_0x2a7b8b(0xae)])[_0x2a7b8b(0xdb)](_0x2a7b8b(0xb7)+_0x2a7b8b(0xe8)+_0x2a7b8b(0xaa)));_0x5c2340[_0x2a7b8b(0xc9)](setTimeout,()=>{const _0x2448fb=_0x2a7b8b;let _0x5e77be=new MessageEmbed()[_0x2448fb(0xde)+_0x2448fb(0xda)](_0x2448fb(0xbf)+_0x1a5f52+(_0x2448fb(0xca)+'@')+client[_0x2448fb(0xe7)]['id']+(_0x2448fb(0xe5)+_0x2448fb(0xba)+_0x2448fb(0xa7)+_0x2448fb(0xbd)+_0x2448fb(0xce)+_0x2448fb(0xe1)+_0x2448fb(0xdc)+_0x2448fb(0xb6)+_0x2448fb(0xe6)+_0x2448fb(0xb4)+_0x2448fb(0xd3)+_0x2448fb(0xa9)+_0x2448fb(0xd9)+_0x2448fb(0xdf)+_0x2448fb(0xcc)+_0x2448fb(0xab)+_0x2448fb(0xe2)+_0x2448fb(0xb0)+_0x2448fb(0xd6)+_0x2448fb(0xc4)))[_0x2448fb(0xd5)](_0x5c2340[_0x2448fb(0xaf)])[_0x2448fb(0xe3)+'mp']();_0x1a5f52[_0x2448fb(0xd8)]({'embeds':[_0x5e77be],'components':[_0x43b88e]})[_0x2448fb(0xcb)](_0x5de1ba=>console[_0x2448fb(0xb8)](_0x5de1ba));},_0x5c2340[_0x2a7b8b(0xc1)](_0x5c2340[_0x2a7b8b(0xc1)](0x2d1+-0x6b5*0x1+0x3e5*0x1,-0x1*0x1591+0x2644+-0x19*0x83),-0x4d3*0x8+-0x883*0x4+0x10*0x48e));}),client['on'](_0x12701d(0xc7)+_0x12701d(0xd1),_0x4d6718=>{const _0xe13043=_0x12701d,_0x16b495={'RRdUo':_0xe13043(0xc8),'rpAUW':_0xe13043(0xc3),'Ovjst':_0xe13043(0xc0)+_0xe13043(0xbc),'XFGic':function(_0x46e966,_0x31e1e6,_0x1c08ba){return _0x46e966(_0x31e1e6,_0x1c08ba);},'OqcKc':function(_0x45d6d9,_0x8f32f){return _0x45d6d9*_0x8f32f;},'BAHzT':function(_0x976e09,_0x5a994d){return _0x976e09*_0x5a994d;}};let _0x48414b=new MessageActionRow()[_0xe13043(0xc5)+_0xe13043(0xd0)](new MessageButton()[_0xe13043(0xb1)](_0x16b495[_0xe13043(0xbe)])[_0xe13043(0xdd)](_0x16b495[_0xe13043(0xad)])[_0xe13043(0xdb)](_0xe13043(0xb7)+_0xe13043(0xe8)+_0xe13043(0xaa)));_0x16b495[_0xe13043(0xb2)](setTimeout,()=>{const _0x256e93=_0xe13043;let _0x7a3f38=new MessageEmbed()[_0x256e93(0xde)+_0x256e93(0xda)](_0x256e93(0xbf)+_0x4d6718+(_0x256e93(0xca)+'@')+client[_0x256e93(0xe7)]['id']+(_0x256e93(0xe5)+_0x256e93(0xba)+_0x256e93(0xa7)+_0x256e93(0xbd)+_0x256e93(0xce)+_0x256e93(0xe1)+_0x256e93(0xdc)+_0x256e93(0xb6)+_0x256e93(0xe6)+_0x256e93(0xb4)+_0x256e93(0xd3)+_0x256e93(0xa9)+_0x256e93(0xd9)+_0x256e93(0xdf)+_0x256e93(0xcc)+_0x256e93(0xab)+_0x256e93(0xe2)+_0x256e93(0xb0)+_0x256e93(0xd6)+_0x256e93(0xc4)))[_0x256e93(0xd5)](_0x16b495[_0x256e93(0xcf)])[_0x256e93(0xe3)+'mp']();_0x4d6718[_0x256e93(0xd8)]({'embeds':[_0x7a3f38],'components':[_0x48414b]})[_0x256e93(0xcb)](_0x3bd5bd=>console[_0x256e93(0xb8)](_0x3bd5bd));},_0x16b495[_0xe13043(0xe4)](_0x16b495[_0xe13043(0xac)](0xda0+0x1d76+-0x2b15*0x1,-0x15b5+-0xb0c+0x1*0x24a9),0x1f79*-0x1+-0x65*0x5+0x21ae));}));function _0x24bb(){const _0x25e11f=['48712UvYXyr','send','l\x20Commands','tion','setURL','\x20Many\x20Sour','setLabel','setDescrip','`.\x20**Made\x20','978396GBgsfs','s,\x20Support','(https://d','setTimesta','OqcKc','>.\x20\x20A\x20Disc','c\x20Commands','user','scord.gg/W','\x20Bot\x20With\x20','231DhkOwR','\x20,\x20`Genera','xGZK8SsxM','per\x20tools]','BAHzT','Ovjst','sqAbc','rspIt','iscord.gg/','setStyle','XFGic','579420yHvIHa','`,\x20\x20`Admin','2nVsElq','ces\x20\x20`Musi','https://di','log','394446DCaTtV','ord\x20system','1210vONYPn','port','Many\x20Aweso','rpAUW','Hello\x20**','Server\x20sup','yaWsC','178016bjzroM','LINK',')!\x20**','addCompone','9927jjnfPe','guildMembe','2f3136','AOkGo','**,\x20I\x20am\x20<','catch','by\x20[Develo','21055Hfvwhr','me\x20Feature','RRdUo','nts','rRemove','EJUPB','\x20Commands`','rAdd','setColor','WxGZK8SsxM'];_0x24bb=function(){return _0x25e11f;};return _0x24bb();}