const { version } = require("discord.js");
const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const fs = require('fs')
const cmdFiles = fs.readdirSync('./commands/').length


exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
if(!message.guild.member(client.user).hasPermission(`EMBED_LINKS`)) return message.channel.send("I don't have `Send Embed` permission.\nPlease contact an administrator if you think this is a bug.");
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
const embed = new Discord.RichEmbed();
embed.setAuthor("STATISTICS", client.user.avatarURL)
.addField("Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
.addField("Users", `${client.users.size.toLocaleString()}`, true)
.addField("Servers", `${client.guilds.size.toLocaleString()}`, true)
.addField("Discord.js", `v${version}`, true)
.addField("Node", `${process.version}`, true)
.addField("Commands", `${cmdFiles}`, true)
.addField("Uptime", `${duration}`, true)
message.channel.send({embed}).catch((err) => {message.channel.send(`:warning: **An error occurred.**\n\`\`\`js\n${err.stack}\`\`\``); console.log(err)});
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "stats",
  category: "Miscelaneous",
  description: "Gives some useful bot statistics",
  usage: "stats"
};
