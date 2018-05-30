const cooldown = new Set();
var generator = require('generate-password');

exports.run = async (client, message, level) => {
  if (cooldown.has(message.author.id)) {
       return message.channel.send(`**${message.author.username}, please cool down! (3 seconds)**`).then(m => {
         m.delete(10000)
       });
      }
const amount = message.content.split(' ').slice(1).join(' ');

if(amount < 1) {
  return message.reply("The length of password must be 1-200.");
}
if(amount > 200) {
  return message.reply("Choose a number between 1-200.");
}

var password = generator.generate({
   length: amount,
   numbers: true
});

message.channel.send("**Your password has been generated:** " + password)
  cooldown.add(message.author.id);
     setTimeout(() => {
       cooldown.delete(message.author.id);
     }, 3000);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pgen', 'passgen', 'pass'],
  permLevel: "User"
};

exports.help = {
  name: "password",
  category: "Fun",
  description: "Generates random password.",
  usage: "password [amount]"
};
