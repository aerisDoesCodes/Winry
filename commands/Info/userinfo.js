    const { Command } = require('klasa');
    const moment = require("moment-timezone");

    var Status = {
      "online": "<:online:343381490521997323> Online",
      "idle": "<:away:343381490614403072> Idle",
      "dnd": "<:dnd:343381490668666880> Dnd",
      "offline": "<:offline:343381490517671947> Invisible"
    };

    module.exports = class extends Command {

      constructor(...args) {
        super(...args, { description: 'Grab information on mentioned user or self.',
        runIn: ['text']
      });
    }

    async run(msg, client) {
      let arg = msg.content.split(' ');// YOUR ARGS FUCKED UP!
      let user = msg.mentions.users.first() || msg.author;
      let member = msg.mentions.members.first() || msg.member;
      const embed = new this.client.methods.Embed()
      .setAuthor(`${user.tag} (${user.id}) Info`, user.displayAvatarURL)
      .setColor(member.highestRole.color)
      .addField("Now playing", user.presence.game ? user.presence.game.name : 'None', true)
      .addField("Status", Status[user.presence.status], true)
      .addField("Nickname", member.nickname || "None", true)
      .addField("Created At", `${moment(user.createdAt).tz('America/Detroit').format('dddd, MMMM Do YYYY, h:mm:ss a zz')}`)
      .addField("Joined At", `${moment(member.joinedAt).tz('America/Detroit').format('dddd, MMMM Do YYYY, h:mm:ss a zz')}`)
      if (member.roles.size > 1) {
        if (member.roles.size <= 10) {
          embed.addField('Roles', member.roles.map(role => {
            if (role.name !== '@everyone') return role.name;
            return '';
          }).join(', ').substring(2), true);
        } else {
          embed.addField('Roles', 'Too many to display', true);
        }
      }
      msg.channel.send({embed});
    }
  };
