exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	message.channel.send("Hello! Upvote me here https://discordbots.org/bot/442917513454682122/vote and I'll give you my love <:bloblove:448030481133338641>")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "upvote",
  category: "Miscelaneous",
  description: "Upvote Winry on discordbots.org.",
  usage: "upvote"
};
