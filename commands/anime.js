exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const Discord = require('discord.js')
const embed = new Discord.RichEmbed()
const randomPuppy = require('random-puppy');
const subreddits = [
    'awwnime',
    'anime'
]
const sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
if(!message.member.hasPermission(`EMBED_LINKS`)) return message.channel.send("I don't have `Send Embed` permission.\nPlease contact an administrator if you think this is a bug.");
    try {
        randomPuppy(sub).then(url=> {
            embed.setImage(url)
            .setFooter("Powered by random-puppy")
            message.channel.send({embed})
        })
        } catch(e) {
            message.channel.send(`An error occured:\n**${e}**\n\nPlease report this to the administrator if you think this is a bug.`)
        }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "anime",
  category: "Images",
  description: "Send's random images of anime from Reddit",
  usage: "anime"
};
// msg.channel.createMessage({embed:{
//     "color": config.options.embedColour,
//     "image": {
//         "url": url
//     },
//     "footer" : { text: "Powered by random-puppy" }
// }})
