const cooldown = new Set();
const moment = require('moment')
require("moment-duration-format");
// const servers = [
//     '419724812592611338'
// ]

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
if (cooldown.has(message.author.id)) {
     return message.reply(`**please cool down! (6 seconds)**`).then(m => {
       m.delete(10000)
     });
    }
    const ver = message.guild.id !== servers
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed();
    embed.setAuthor(`${message.guild.name}`, message.guild.iconURL || "https://owo.whats-th.is/207d77.png")
    embed.addField('ID', `${message.guild.id}`, true)
    embed.addField('Owner', `${message.guild.owner.user.tag}`, true);
    embed.addField('Owner id', `${message.guild.owner.id}`, true);
    embed.addField('Region', `${message.guild.region}`, true);
    embed.addField('Members', `${message.guild.memberCount.toLocaleString()}`, true);
    embed.addField('Roles', `${message.guild.roles.filter(r => r.name).size.toLocaleString()}`, true);
    embed.addField('Channels', `${message.guild.channels.filter(r => r.name).size.toLocaleString()}`, true);
    embed.addField('Created At', `${moment(message.guild.createdAt).format('ddd MMM Do YYYY')}`, true);
    embed.addField('Verification Level', `${message.guild.verificationLevel}`, true);
//    embed.addField('Verified Server', `${servers[msg.channel.guild.id]} false` || `<:VerifiedServer:456834641945559040>`)
    embed.setColor('#f1f199');
    message.channel.send({embed});
cooldown.add(message.author.id);
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 6000);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['si'],
permLevel: "User"
};

exports.help = {
name: "serverinfo",
category: "Utility",
description: `Show's statistic about the ${message.guild.name}.` || "Show's statistic about the server.",
usage: "info"
};
