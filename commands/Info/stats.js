let { Command, version: klasaVersion } = require('klasa');
let { version: discordVersion } = require('discord.js');
let moment = require('moment');
require('moment-duration-format');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      description: 'Provides some details about the bot and stats.'
    });
  }

  async run(msg) {
    let duration = moment.duration(this.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    let embed = new this.client.methods.Embed();
    // embed.setAuthor(`${this.client.user.username} STATISTICS`, `${this.client.user.displayAvatarURL}`)
    embed.addField('Memory', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField('Uptime', `${duration}`, true)
    .addField('Users', `${this.client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
    .addField('Servers', `${this.client.guilds.size.toLocaleString()}`, true)
    .addField('Channels', `${this.client.channels.size.toLocaleString()}`, true)
    // .addField('Version', `${klasa.version}`,true)
    .setTimestamp()
    //.setColor("")
    msg.channel.send({embed})
  }
};
