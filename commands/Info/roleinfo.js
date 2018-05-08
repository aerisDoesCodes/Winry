const { Command, version: klasaVersion } = require('klasa');

module.exports = class extends Command {

  constructor(...args) {
    super(...args, { description: 'Provides some details the specified role.',
    runIn: ['text']

  });
}

async run(msg) {
  let arg = msg.content.split(' ').slice(1);
  if(arg.join(' ').length < 3) return msg.channel.send("Please enter a valid role.");
  let roleName = msg.content.split(' ').splice(1).join(' ');
  let roleID = msg.guild.roles.find('name', roleName);
  if(!roleID) return msg.channel.send("Please enter a valid role.");
  let membersWithRole = msg.guild.members.filter(m => m.roles.has(roleID.id));
  let listOfMembers = membersWithRole.array().map(m => m.user.username).join(', ');
  let moment = require("moment");
  if(listOfMembers.size <= 10) return embed.addField("Too many members");

  var test = {
    "true": "True",
    "false": "False"
  };

  const embed = new this.client.methods.Embed();
  embed.setColor(roleID.hexColor)
  .setAuthor("Malu", this.client.user.displayAvatarURL())
  .setTitle("Role Information")
  .setDescription(`Here is information on **${roleID}**`)
  .addField("__Role Name__", roleID, true)
  .addField("__Role Colour__", roleID.hexColor, true)
  .addField("__Members__", listOfMembers || "Too many members to display")
  .addField("__Mentionable__", test[roleID.mentionable], true)
  .addField("__Hoistable__", test[roleID.hoist], true)
  .addField("__Created At__", `${moment(roleID.createdAt).format('MM.DD.YY')}`, true)
  msg.channel.send({embed});
}

};
