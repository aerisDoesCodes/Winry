const cooldown = new Set();
const ver = "Winry v3.4.1"

exports.run = (client, message, args, level) => {
  if (cooldown.has(message.author.id)) {
       return message.channel.send(`**${message.author.username}, please cool down! (3 seconds)**`).then(m => {
         m.delete(10000)
       });
      }
      const currentUpdate = [
        "\`\`\`diff"+
        `\n${ver}\n`+
        "\n+ Added NSFW Commands \"w!rule34 and w!snap\""+
        "\n+ Added \"w!updatelogs\" command to stay updated"+
        "\n+ Fix typo description"+
        "\n+ All commands now have descriptions"+
        "\n+ More NSFW commands coming soon™"+
        "\`\`\`"
        ]

        const previousUpdate = [
          "\`\`\`diff"+
          "\n+ Added NSFW Command \"w!teen\""+
          "\`\`\`"
          ]

      message.channel.send("**May 27 2018 Updates:**\n" + currentUpdate + "\n\n" + "**May 25 2018 Update:**\n" + previousUpdate)
  cooldown.add(message.author.id);
     setTimeout(() => {
       cooldown.delete(message.author.id);
     }, 3000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['logs', 'updates'],
  permLevel: "User"
};

exports.help = {
  name: "updatelogs",
  category: "Utility",
  description: "Check's the Winry's updates.",
  usage: "updatelog"
};
