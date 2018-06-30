exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const randomText = [
    "What are you doing?",
    "Am I even a thing?",
    "OwO what is this?",
    "Are you a bot?",
    "Noticed me senpai!",
    "Do people even use this?",
    "Is this thing even working?",
    "Who are you?",
    "Why should I even do this?",
    "A thing is a thing!",
    "Yes, I am alive!",
    "uh?"
  ]
  const Discord = require('discord.js');
  const embed = new Discord.RichEmbed();
  embed.setDescription(`[**${randomText[Math.floor(Math.random() * randomText.length)]}** - Pong! ${Math.round(client.ping)}ms](https://www.youtube.com/watch?v=vjw3nYAt7rw&t=5s)`)
  embed.setColor('#f1f199');
  message.channel.send({embed}).catch((err) => {message.channel.send(`:warning: **An error occurred.** https://discord.gg/6Y2jTtR\n\`\`\`js\n${err.stack}\`\`\``); console.log(err)});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ping",
  category: "Miscelaneous",
  description: "Checks bot response time.",
  usage: "ping"
};
