const exec = require('child_process').exec;
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
exec(`${args.join(' ')}`, (error, stdout) => {
      const response = (error || stdout);
      message.channel.send(`Ran: ${message.content}\n\`\`\`${response}\`\`\``, {split: true}).catch(console.error);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "exec",
  category: "System",
  description: "executes a new process.",
  usage: "exec <expression>"
>>>>>>> f628f89131fb1108514f2c2d3dcc61df44920a46
};