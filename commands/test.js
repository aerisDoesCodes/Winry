exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
const pr = `${message.settings.prefix}`;
const  usageText = "The `test` argument is required.\n"+
`Command Usage: \`${pr}test <test>\``

  const content = message.content.split(' ').slice(1).join(' ');
  if(!content) return message.channel.send(usageText);
  message.channel.send(content)
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
  usage: "test <test>"
};
