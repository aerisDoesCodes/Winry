const { Command } = require('klasa');
const moment = require("moment-timezone");
let Region = {
  "us-central": "US Central"
};


module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      description: 'Get information on the current server.',
      cooldown: 15000,
      runIn: ['text'] });
    }

    async run(msg, [...params]) {

      let user = msg.mentions.users.first() || msg.author;
      let member = msg.mentions.members.first() || msg.member;
      const embed = new this.client.methods.Embed();
      if(msg.guild.iconURL() === null) return;
      embed.setAuthor(`${msg.guild.name} (${msg.guild.id}) Server Info`, msg.guild.iconURL())
      //guild.members.filter((u) => u.user.bot).size
      .addField("Owner", `${msg.guild.owner.user.tag} (${msg.guild.owner.id})`)
      .addField("Region", Region[msg.guild.region])
      .addField("Created At", `${moment(msg.guild.createdAt).tz('America/Detroit').format('dddd, MMMM Do YYYY, h:mm:ss a zz')}`)
      .addField("Channels", msg.guild.channels.size)
      .addField("Members", msg.guild.memberCount, true)
      .addField("Humans", msg.guild.members.filter((u) => u.user).size, true)
      .addField("Bots", msg.guild.members.filter((u) => u.user.bot).size, true)
      .addField("Roles", msg.guild.roles.size, true)
      .addField("Emotes", msg.guild.emojis.size)
      .setThumbnail(msg.guild.iconURL())
      .setColor(member.highestRole.color)
      msg.channel.send({embed});
    }

    async init() {
      // You can optionally define this method which will be run when the bot starts (after login, so discord data is available via this.client)
    }

  };
