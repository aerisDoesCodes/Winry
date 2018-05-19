const cooldown = new Set();

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
if(!message.guild.member(client.user).hasPermission(`ATTACH_FILES`)) return message.channel.send("I don't have `Attach Files` permission.\nPlease contact an administrator if you think this is a bug.");
const Jimp = require('jimp');
if (cooldown.has(message.author.id)) {
     return message.channel.send(`**${message.author.username}, please cool down! (10 seconds)**`).then(m => {
       m.delete(3000)
     });
    }
   // const content = message.content.split(' ').slice(1).join(' ');
   //   if (!content) return message.reply("Gimme somethin to nut mate!");
const user = message.mentions.users.first();
if(!user) return message.channel.send("Please mention someone to get stepped.");
Jimp.read(message.author.avatarURL || message.author.defaultAvatarURL, function (err, auth){
 Jimp.read(user.avatarURL || user.defaultAvatarURL, function (err, lonna){
 Jimp.read('https://cdn.glitch.com/aface8e8-5406-40cd-b4ab-f54eaa7496c7%2Few.png?1526647957214', (err, lenna) => {
 message.channel.send(':gear: generating...').then(async (message) => {message.delete(5000)})
 auth.resize(120, 120)
 auth.rotate(75)
 lenna.composite(auth, 380, 180);

 lonna.resize(180, 100)
 lonna.rotate(-60)
 lenna.composite(lonna, 220, 780);
 lenna.getBuffer(Jimp.AUTO, (err, buffer) => {
message.channel.sendFile(buffer).catch((err) => {message.channel.send(`:warning: **An error occurred.**\n\`\`\`js\n${err.stack}\`\`\``); console.log(err)});
})
})
})
})

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
name: "step",
category: "Image Manipulation",
description: "Ew I step in shit.",
usage: "step [user]"
};
