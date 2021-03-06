const cooldown = new Set();

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const pr = `${message.settings.prefix}`;
  const  usageText = "The `text` argument is required.\n"+
  `Command Usage: \`${pr}error <text>\``

 if(!message.guild.me.hasPermission(`ATTACH_FILES`)) return message.channel.send("I don't have `Attach Files` permission.\nPlease contact an administrator if you think this is a bug https://discord.gg/6Y2jTtR.");
 if (cooldown.has(message.author.id)) {
      return message.reply(`**please cool down! (10 seconds)**`).then(m => {
        m.delete(10000)
      });
     }
  const jimp = require('jimp');
  const content = message.content.split(' ').slice(1).join(' ');
  if (!content) return message.channel.send(usageText);
  if (content.length > 15) { return message.reply("You must not exceed more than 15 characters!") };
       jimp.read('http://i.imgur.com/b9yMgxq.jpg', (err, image) => {
         message.channel.send(':gear: generating...').then(async (msg) => {msg.delete(5000)})
         if (err) return console.log(err);
         const text = new jimp(500, 150, function(err, text) {
           if (err) return console.log(err);
           jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(function(font) {
              text.print(font, 85, 85, content, 1000);
              image.composite(text, 0, 0)
              image.print(font, 80, 207, "Ok");
              image.print(font, 190, 207, "Cancel");
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

// const Jimp = require('jimp')
// Jimp.read("http://i.imgur.com/b9yMgxq.jpg", (err, lenna) => {
// console.log(err)
// Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function(font) {
// lenna.print(font, 80, 207, "Ok");
// lenna.print(font, 190, 207, "Cancel");
// lenna.print(font, 90, 80, "TESSSSSSSSSSSSSSSSSSSSSSST", 1000);
// lenna.getBuffer(Jimp.AUTO, (err, buffer) => {
// console.log(err)
// message.channel.sendFile(buffer)
// })
// })
// })

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["err"],
  permLevel: "User"
};

exports.help = {
  name: "error",
  category: "Image Manipulation",
  description: "Send an error image.",
  usage: "error [text]"
};
