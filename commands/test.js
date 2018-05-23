const cooldown = new Set();

exports.run = (client, message, args, level) => {
  if (cooldown.has(message.author.id)) {
       return message.channel.send(`**${message.author.username}, please cool down! (3 seconds)**`).then(m => {
         m.delete(10000)
       });
      }
message.channel.send('ok')
  cooldown.add(message.author.id);
     setTimeout(() => {
       cooldown.delete(message.author.id);
     }, 3000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "animejs",
  category: "ok",
  description: "Not sure what should I add here.",
  usage: "test [ok]"
};
