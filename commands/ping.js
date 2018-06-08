exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const randomText = [
    "What are you doing?",
    "Am I even a thing?",
    "OwO what is this?",
    "Are you a bot?",
    "Noticed me senpai!",
    "Does people even use this?",
    "Is this thing even working?",
    "Who are you?",
    "Why should I even do this?",
    "A thing is a thing!",
    "Yes, I am alive!",
    "uh?"
  ]
  const msg = await message.channel.send("Ping?");
  msg.edit(`**${randomText[Math.floor(Math.random() * randomText.length)]}**` + ' - ' + `Pong! ${Math.round(client.ping)}ms`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ping",
  category: "Miscelaneous",
  description: "Checks bot response time.",
  usage: "ping"
};
