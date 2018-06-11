const cooldown = new Set();

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const pr = `${message.settings.prefix}`;
  const  usageText = "The `text` argument is required.\n"+
  `Command Usage: \`${pr}twitter <text>\``

 if(!message.guild.me.hasPermission(`ATTACH_FILES`)) return message.channel.send("I don't have `Attach Files` permission.\nPlease contact an administrator if you think this is a bug https://discord.gg/6Y2jTtR.");
 if (cooldown.has(message.author.id)) {
      return message.reply(`**please cool down! (10 seconds)**`).then(m => {
        m.delete(10000)
      });
     }
  const jimp = require('jimp');
  const content = message.content.split(' ').slice(1).join(' ');
  if (!content) return message.channel.send(usageText);
  if (content.length > 30) { return message.reply("You must not exceed more than 30 characters!") };
       jimp.read('https://cdn.glitch.com/aface8e8-5406-40cd-b4ab-f54eaa7496c7%2Ftwitter.png?1527051965693', (err, image) => {
         message.channel.send(':gear: generating...').then(async (msg) => {msg.delete(5000)})
         if (err) return console.log(err);
         const text = new jimp(950, 950, function(err, text) {
           if (err) return console.log(err);
           jimp.loadFont(jimp.FONT_SANS_64_BLACK).then(function(font) {
              text.print(font, 50, 128, content, 1000);
              image.composite(text, 0, 0)
              image.getBuffer(jimp.AUTO, (err, buffer) => {
                if (err) return console.log(err);
                message.channel.sendFile(buffer).catch((err) => {message.channel.send(`:warning: **An error occurred.** https://discord.gg/6Y2jTtR\n\`\`\`js\n${err.stack}\`\`\``); console.log(err)});
              })
           });
         });
       });
       cooldown.add(message.author.id);
          setTimeout(() => {
            cooldown.delete(message.author.id);
          }, 10000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["trump"],
  permLevel: "User"
};

exports.help = {
  name: "twitter",
  category: "Image Manipulation",
  description: "Send an message from twitter.",
  usage: "twitter <text>"
};
