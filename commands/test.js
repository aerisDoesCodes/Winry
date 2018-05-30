const cooldown = new Set();
var generator = require('generate-password');

exports.run = async (client, message, level) => {
//   if (cooldown.has(message.author.id)) {
//        return message.channel.send(`**${message.author.username}, please cool down! (3 seconds)**`).then(m => {
//          m.delete(10000)
//        });
//       }
const amount = message.content.split(' ').slice(1).join(' ');

if(amount < 1) {
  return message.reply("The length of password must be 1-100.");
}
if(amount > 200) {
  return message.reply("Choose a number between 1-100.");
}

var password = generator.generate({
   length: amount,
   numbers: true
});

message.channel.send("**Your password has been generated:** " + password)
//   cooldown.add(message.author.id);
//      setTimeout(() => {
//        cooldown.delete(message.author.id);
//      }, 3000);
// };
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
