const DBL = require("dblapi.js");
const Discord = require('discord.js');
const snek = require("snekfetch");
const got = require('got');
const _ = require('lodash');
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0MjkxNzUxMzQ1NDY4MjEyMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTI2ODY0MDk1fQ.qpD1MaIePeW8I6LbcqqdEqm5tEFgThIKTX87bkX9YSY');
const cooldown = new Set();

getBoobs = (callback) => {
    got('http://api.oboobs.ru/boobs/noise/' + _.random(100,10732)).then(res => {
      try {
        let length =  JSON.parse(res.body).length;
        callback(undefined, JSON.parse(res.body)[_.random(0,length)].preview);
      } catch (err) {
        callback(err);
      }
    }).catch(callback);
  };

exports.run = (client, message, args, level) => {
  if(!message.guild.member(client.user).hasPermission(`EMBED_LINKS`)) return message.channel.send("I don't have `Send Embed` permission.\nPlease contact an administrator if you think this is a bug. A very cool invite link https://invite.gg/justabot");
  if (cooldown.has(message.author.id)) {
       return message.channel.send(`**${message.author.username}, please cool down! (6 seconds)**`).then(m => {
         m.delete(3000)
       });
      }
    dbl.hasVoted(message.author.id).then(voters => {
   if(!voters) return message.channel.send('You must upvote this bot for NSFW commands!\nUpvote Here: https://discordbots.org/bot/442917513454682122/vote');
    if (!message.channel.nsfw) return message.channel.send("You must only run this command in a NSFW channel!");
    return getBoobs((a,b)=>{
            b ='http://media.oboobs.ru/'+b;
            const Discord = require('discord.js');
            const embed = new Discord.RichEmbed();
            embed.setImage(b)
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
  name: "boobs",
  category: "NSFW",
  description: "Send's random boobs from http://api.oboobs.ru/boobs/noise/",
  usage: "pantsu"
};
