// const cooldown = new Set();
//https://cdn.glitch.com/aface8e8-5406-40cd-b4ab-f54eaa7496c7%2FClyde.png?1526537796321
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
// if (cooldown.has(message.author.id)) {
//      return message.channel.send(`${message.author}, please cool down! (5 seconds left)`).then(m => {
//        m.delete(6000)
//      });
//     }



// cooldown.add(message.author.id);
//    setTimeout(() => {
//      cooldown.delete(message.author.id);
//    }, 6000);
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: "Bot Owner"
};

exports.help = {
name: "test",
category: "Test Cmds",
description: "test.",
usage: "test"
};
