const cooldown = new Set();

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
const Discord = require('discord.js')
const embed = new Discord.RichEmbed()
const randomPuppy = require('random-puppy');
var subreddits = [
    'Rabbits',
    'cutebunnies'
]
const sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
if(!message.guild.me.hasPermission(`EMBED_LINKS`)) return message.channel.send("I don't have `Send Embed` permission.\nPlease contact an administrator if you think this is a bug https://discord.gg/6Y2jTtR.");
if (cooldown.has(message.author.id)) {
     return message.reply(`**please cool down! (3 seconds)**`).then(m => {
       m.delete(10000)
     });
    }
        randomPuppy(sub).then(url=> {
            embed.setImage(url)
            .setFooter("Powered by random-puppy")
      .setColor('#d183d3')
            message.channel.send({embed}).catch((err) => {message.channel.send(`:warning: **An error occurred.** https://discord.gg/6Y2jTtR\n\`\`\`js\n${err.stack}\`\`\``); console.log(err)});
        });
        cooldown.add(message.author.id);
           setTimeout(() => {
             cooldown.delete(message.author.id);
           }, 3000);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bun'],
  permLevel: "User"
};

exports.help = {
  name: "bunny",
  category: "Images",
  description: "Send's random catsu from /r/cutebunnies",
  usage: "bunny"
};