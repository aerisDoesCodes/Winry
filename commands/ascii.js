const cooldown = new Set();
const figletAsync = require('util').promisify(require('figlet'));

exports.run = async (client, message, level) => {
  const pr = `${message.settings.prefix}`;
  const  usageText = "The `text` argument is required.\n"+
  `Command Usage: \`${pr}achievement <text>\``

  if (cooldown.has(message.author.id)) {
       return message.channel.send(`**${message.author.username}, please cool down! (3 seconds)**`).then(m => {
         m.delete(10000)
       });
      }
const args = message.content.split(' ').slice(1).join(' ');

if (!args) return message.channel.send(usageText);
if (args.length > '15') return message.reply("You must not exceed more than 15 characters!");
const data = await figletAsync(args);
return message.channel.send(data, { code: true });

  cooldown.add(message.author.id);
     setTimeout(() => {
       cooldown.delete(message.author.id);
     }, 3000);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ascii",
  category: "Fun",
  description: "Convert text to ascii.",
  usage: "ascii [text]"
};
