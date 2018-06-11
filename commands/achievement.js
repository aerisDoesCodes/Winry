const snekfetch = require('snekfetch');
const cooldown = new Set();

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const pr = `${message.settings.prefix}`;
  const  usageText = "The `text` argument is required.\n"+
  `Command Usage: ${pr}achievement <text>`
if(!message.guild.me.hasPermission(`ATTACH_FILES`)) return message.channel.send("I don't have `Attach Files` permission.\nPlease contact an administrator if you think this is a bug https://discord.gg/6Y2jTtR.");
if (cooldown.has(message.author.id)) {
     return message.reply(`**please cool down! (10 seconds)**`).then(m => {
       m.delete(10000)
     });
   }
     let [title, contents] = args.join(" ").split("|");
     if(!title) return message.channel.send(usageText);
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
   .then(r=>message.channel.send("", {files:[{attachment: r.body}]})).catch((err) => {message.channel.send(`:warning: **An error occurred.** https://discord.gg/6Y2jTtR\n\`\`\`js\n${err.stack}\`\`\``); console.log(err)});
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
usage: "achievement <text>"
};
