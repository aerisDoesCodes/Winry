const cooldown = new Set();

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
if(!message.guild.me.hasPermission(`ATTACH_FILES`)) return message.channel.send("I don't have `Attach Files` permission.\nPlease contact an administrator if you think this is a bug.");
const Jimp = require('jimp');
if (cooldown.has(message.author.id)) {
     return message.reply(`**please cool down! (10 seconds)**`).then(m => {
       m.delete(10000)
     });
    }
   if (message.mentions.users.size === 0) {
     Jimp.read(message.author.avatarURL || message.author.defaultAvatarURL, function (err, lonna){
     Jimp.read('https://cdn.glitch.com/aface8e8-5406-40cd-b4ab-f54eaa7496c7%2Fimage.png?1526567947349', (err, lenna) => {
     message.channel.send(':gear: generating...').then(async (message) => {message.delete(5000)})
     lonna.resize(150, 180)
     // lonna.crop(12,10,88,102)
     lenna.composite(lonna, 120, 70 );
     lenna.getBuffer(Jimp.AUTO, (err, buffer) => {
    message.channel.sendFile(buffer).catch((err) => {message.channel.send(`:warning: **An error occurred.**\n\`\`\`js\n${err.stack}\`\`\``); console.log(err)});
     })
   })
 })
} else {
 Jimp.read(message.mentions.users.first().avatarURL || message.mentions.users.first().defaultAvatarURL, function (err, lonna){
 Jimp.read('https://cdn.glitch.com/aface8e8-5406-40cd-b4ab-f54eaa7496c7%2Fimage.png?1526567947349', (err, lenna) => {
 message.channel.send(':gear: generating...').then(async (message) => {message.delete(5000)})
 lonna.resize(150, 180)
 // lonna.crop(12,10,88,102)
 lenna.composite(lonna, 120, 70 );
 lenna.getBuffer(Jimp.AUTO, (err, buffer) => {
message.channel.sendFile(buffer).catch((err) => {message.channel.send(`:warning: **An error occurred.**\n\`\`\`js\n${err.stack}\`\`\``); console.log(err)});
 })
})
})
}
cooldown.add(message.author.id);
  setTimeout(() => {
    cooldown.delete(message.author.id);
  }, 10000);
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: "User"
};

exports.help = {
name: "news",
category: "Image Manipulation",
description: "Show's image of man breaks a house.",
usage: "news [user](Optional)"
};
