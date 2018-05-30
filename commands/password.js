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
  return message.reply("The length of password must be 1-100.");
}
if(amount > 200) {
  return message.reply("Choose a number between 1-100.");
}

const password = generator.generate({
   length: amount,
   numbers: true
});

const collector = message.channel.createCollector(m => m.author === message.author, {
  time: 10000
});
message.channel.send("Would you like it sent here or in the DMs? [here, dm, cancel]");
collector.on("message", m => {
  if (m.content.toUpperCase() === "HERE") collector.stop("here");
  if (m.content.toUpperCase() === "DM") collector.stop("dm");
  if (m.content.toUpperCase() === "CANCEL") collector.stop("aborted");
});
collector.on("end", (collected, reason) => {
  if (reason === "time") return message.channel.send("The prompt timed out...");
  if (reason === "aborted") return message.channel.send("The command has been aborted");
  if (reason === "here") {
    message.channel.send("**Your password has been generated:** " + password)
  }
  if (reason === "dm") {
    message.author.send("**Your password has been generated:** " + password).catch((err) => {message.channel.send(`:warning: **An error occurred.**\n\`\`\`js\n${err.stack}\`\`\``); console.log(err)});
  }
});
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
