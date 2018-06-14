
const { version } = require("discord.js");
const Discord = require("discord.js");
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0MjkxNzUxMzQ1NDY4MjEyMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTI2ODY0MDk1fQ.qpD1MaIePeW8I6LbcqqdEqm5tEFgThIKTX87bkX9YSY');
const moment = require("moment");
require("moment-duration-format");
const fs = require('fs')
const cmdFiles = fs.readdirSync('./commands/').length
const ver = "Winry v4.1.3"
const cooldown = new Set();

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
if(!message.guild.me.hasPermission(`EMBED_LINKS`)) return message.channel.send("I don't have `Send Embed` permission.\nPlease contact an administrator if you think this is a bug https://discord.gg/6Y2jTtR.");
if (cooldown.has(message.author.id)) {
     return message.reply(`**please cool down! (6 seconds)**`).then(m => {
       m.delete(10000)
     });
    }
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
const embed = new Discord.RichEmbed();
dbl.getVotes(true).then(k=>{
embed.setAuthor("STATISTICS", client.user.avatarURL)
.addField("Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
.addField("Users", `${client.users.size.toLocaleString()}`, true)
.addField("Servers", `${client.guilds.size.toLocaleString()}`, true)
.addField("Discord.js", `v${version}`, true)
.addField("Node", `${process.version}`, true)
.addField("Commands", `${cmdFiles}`, true)
.addField("Upvotes", `${k.length}`, true)
.addField("Uptime", `${duration}`, true)
.addField("Version", `${ver}`, true)
.addField("Website", "[winry.xyz](https://winry.xyz)", true)
.setColor('#f1f199')
message.channel.send({embed}).catch((err) => {message.channel.send(`:warning: **An error occurred.** https://discord.gg/6Y2jTtR\n\`\`\`js\n${err.stack}\`\`\``); console.log(err)});
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
  name: "stats",
  category: "Miscelaneous",
  description: "Gives some useful bot statistics",
  usage: "stats"
};