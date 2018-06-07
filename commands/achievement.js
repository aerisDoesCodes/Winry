const snekfetch = require('snekfetch');
const cooldown = new Set();

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
if(!message.guild.me.hasPermission(`ATTACH_FILES`)) return message.channel.send("I don't have `Attach Files` permission.\nPlease contact an administrator if you think this is a bug.");
if (cooldown.has(message.author.id)) {
     return message.reply(`**please cool down! (10 seconds)**`).then(m => {
       m.delete(10000)
     });
   }
     let [title, contents] = args.join(" ").split("|");
     if(!title) return message.reply("Please give me something to achieve!");
  if(!contents) {
    [title, contents] = ["Achievement Get!", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if(title.length > 22 || contents.length > 22) return message.edit("Max Length: 22 Characters. Soz.").then(message.delete.bind(message), 2000);
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));
  message.delete();
cooldown.add(message.author.id);
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 10000);
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['mca'],
permLevel: "User"
};

exports.help = {
name: "achievement",
category: "Image Manipulation",
description: "Send a Minecraft Achievement image to the channel.",
usage: "achievement [text]"
};
