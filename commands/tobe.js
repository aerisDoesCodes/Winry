exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
 if(!message.guild.member(client.user).hasPermission(`ATTACH_FILES`)) return message.channel.send("I don't have `Attach Files` permission.\nPlease contact an administrator if you think this is a bug.");
  const Jimp = require('jimp');
     // const content = message.content.split(' ').slice(1).join(' ');
     //   if (!content) return message.reply("Gimme somethin to nut mate!");
     if (message.mentions.users.size === 0) {
       Jimp.read(message.author.avatarURL || message.author.defaultAvatarURL, function (err, lonna){
       Jimp.read('https://cdn.glitch.com/aface8e8-5406-40cd-b4ab-f54eaa7496c7%2Fbitch-might-be-shakespeare.jpg?1526469728857', (err, lenna) => {
       message.channel.send(':gear: generating...').then(async (message) => {message.delete(5000)})
       lonna.resize(180, 180)
       // lonna.crop(12,10,88,102)
       lenna.composite(lonna, 128, 170 );
       lenna.getBuffer(Jimp.AUTO, (err, buffer) => {
      message.channel.sendFile(buffer).catch((err) => {message.channel.send(`:warning: **An error occurred.**\n\`\`\`js\n${err.stack}\`\`\``); console.log(err)});
       })
     })
   })
 } else {
   Jimp.read(message.mentions.users.first().avatarURL || message.mentions.users.first().defaultAvatarURL, function (err, lonna){
   Jimp.read('https://cdn.glitch.com/aface8e8-5406-40cd-b4ab-f54eaa7496c7%2Fbitch-might-be-shakespeare.jpg?1526469728857', (err, lenna) => {
   message.channel.send(':gear: generating...').then(async (message) => {message.delete(5000)})
   lonna.resize(180, 180)
   // lonna.crop(12,10,88,102)
   lenna.composite(lonna, 128, 170 );
   lenna.getBuffer(Jimp.AUTO, (err, buffer) => {
  message.channel.sendFile(buffer).catch((err) => {message.channel.send(`:warning: **An error occurred.**\n\`\`\`js\n${err.stack}\`\`\``); console.log(err)});
   })
 })
})
 }
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: "User"
};

exports.help = {
name: "tobe",
category: "Image Manipulation",
description: "test.",
usage: "test"
};