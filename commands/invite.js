exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
message.channel.send("Well oh my, you like me don't ya?\nHere is my invite <https://discordapp.com/oauth2/authorize?client_id=442917513454682122&permissions=201386057&scope=bot>"+
"\nJoin Official Discord Server! https://discord.gg/6Y2jTtR"+
"\nVisit my website https://winry.xyz/")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "invite",
  category: "Miscelaneous",
  description: "You like me, Invite me.",
  usage: "invite"
};
