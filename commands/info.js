const cooldown = new Set();

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
if (cooldown.has(message.author.id)) {
     return message.channel.send(`${message.author}, please cool down! (3 seconds)`).then(m => {
       m.delete(6000)
     });
    }

message.channel.send(
"Author: I was completely bored that time when I had this idea in mind that, I should make a shitty bot and I was like \"mhmmm should I?\" then I've "+
"been thinking, what should the bot\'s main purpose? 3 hours later, I started looking for an API for me to use on a BOT for its main purpose but on my mind, it just sparked "+
"\"Why not an image manipulating bot?\" REEEEE I dunno canvas but mhmm Jimp(<https://www.npmjs.com/package/jimp>) eh I guess  this will do. STORY END! "+
"\n\nCommand Handler Used On The Bot: <https://github.com/AnIdiotsGuide/guidebot>\n"
)

cooldown.add(message.author.id);
   setTimeout(() => {
     cooldown.delete(message.author.id);
   }, 3000);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: "User"
};

exports.help = {
name: "info",
category: "Miscelaneous",
description: "Show's a background story how bot was made.",
usage: "info"
};
