exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
 if(!message.guild.member(client.user).hasPermission(`ATTACH_FILES`)) return message.channel.send("I don't have `Attach Files` permission.\nPlease contact an administrator if you think this is a bug.");
  const jimp = require('jimp');
     const content = message.content.split(' ').slice(1).join(' ');
       if (!content) return message.reply("Gimme somethin to nut mate!");
       jimp.read('https://cdn.glitch.com/aface8e8-5406-40cd-b4ab-f54eaa7496c7%2Fnut.jpg?1525878903872', (err, image) => {
         if (err) return console.log(err);
         const text = new jimp(630, 150, function(err, text) {
           if (err) return console.log(err);
           jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(function(font) {
              text.print(font, 0, 0, content, 650);
              image.composite(text, 15, 5)
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
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "nut",
  category: "Image Manipulation",
  description: "Give some nut.",
  usage: "nut [args]"
};
