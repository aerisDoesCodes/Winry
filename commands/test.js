exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.send('test')
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "test",
  category: "ok",
  description: "Not sure what should I add here.",
  usage: "test [ok]"
};
