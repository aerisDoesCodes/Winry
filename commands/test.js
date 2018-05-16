exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
if(!message.guild.member(client.user).hasPermission(`ADMINISTRATOR`)) return message.channel.send("me admin");
message.channel.send('OK I do have admin perm, kthxbai');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "test",
  category: "Test Cmd",
  description: "test.",
  usage: "test"
};
