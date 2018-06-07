const DBL = require("dblapi.js");
const Discord = require('discord.js');
const request = require('request');
const snekfetch = require('snekfetch');
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0MjkxNzUxMzQ1NDY4MjEyMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTI2ODY0MDk1fQ.qpD1MaIePeW8I6LbcqqdEqm5tEFgThIKTX87bkX9YSY');
const cooldown = new Set();

exports.run = (client, message, args, level) => {
  if(!message.guild.me.hasPermission(`EMBED_LINKS`)) return message.channel.send("I don't have `Send Embed` permission.\nPlease contact an administrator if you think this is a bug. A very cool invite link https://invite.gg/justabot");
  if (cooldown.has(message.author.id)) {
       return message.reply(`**please cool down! (6 seconds)**`).then(m => {
         m.delete(10000)
       });
      }
    dbl.hasVoted(message.author.id).then(voters => {
if(!voters) return message.channel.send("Senpai <:bloblove:448030481133338641> you haven't upvoted for me :c"+ 
    "\nPlease upvote for me to use my NSFW commands >////< Please go here: https://discordbots.org/bot/442917513454682122/vote"+
    " After upvoting, please wait 1 minute to use the command again as the BotList API is too slow!");
    if (!message.channel.nsfw) return message.channel.send("You must only run this command in a NSFW channel!");
    const response = request('https://nekos.life/api/lewd/neko', (e,r,b) => {
    const imageURL = JSON.parse(b).neko;
            const Discord = require('discord.js');
            const embed = new Discord.RichEmbed();
            embed.setImage(imageURL)
            .setDescription("Love me <:bloblove:448030481133338641>")
            .setColor('#d183d3')
            message.channel.send({embed})
  })
})
  cooldown.add(message.author.id);
     setTimeout(() => {
       cooldown.delete(message.author.id);
     }, 6000);
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "neko",
  category: "NSFW",
  description: "Send's random neko from https://nekos.life/api/v2/img/neko",
  usage: "neko"
};
