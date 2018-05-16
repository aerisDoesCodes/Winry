exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
 if(!message.guild.member(client.user).hasPermission(`ATTACH_FILES`)) return message.channel.send("I don't have `Attach Files` permission.\nPlease contact an administrator if you think this is a bug.");
  const jimp = require('jimp');
  const penis = `8${"=".repeat((Math.floor(Math.random() * 10) + 1 ) * 2)}D`
     // const content = message.content.split(' ').slice(1).join(' ');
     //   if (!content) return message.reply("Gimme somethin to nut mate!");
       jimp.read('https://cdn.glitch.com/aface8e8-5406-40cd-b4ab-f54eaa7496c7%2FPenis%20Size%201.png?1526464771236', (err, image) => {
         message.channel.send(':gear: generating...').then(async (msg) => {msg.delete(5000)})
         if (err) return console.log(err);
         const text = new jimp(800, 150, function(err, text) {
           if (err) return console.log(err);
           jimp.loadFont(jimp.FONT_SANS_64_BLACK).then(function(font) {
             // text.resize(200, 200)
              text.print(font, 0, 0, penis, 10000);
              image.print(font, 30, 180, `${message.author.username}\'s Penis Size:`, 650);
              image.composite(text, 17, 450)
              image.getBuffer(jimp.AUTO, (err, buffer) => {
                if (err) return console.log(err);
                message.channel.sendFile(buffer).catch((err) => {message.channel.send(`:warning: **An error occurred.**\n\`\`\`js\n${err.stack}\`\`\``); console.log(err)});
              })
           });
         });
       });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['benis'],
  permLevel: "User"
};

exports.help = {
  name: "penis",
  category: "Image Manipulation",
  description: "Show user's penis size.",
  usage: "penis"
};
