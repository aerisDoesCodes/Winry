const cooldown = new Set();

exports.run = (client, message, args, level) => {
  if (cooldown.has(message.author.id)) {
       return message.channel.send(`**${message.author.username}, please cool down! (3 seconds)**`).then(m => {
         m.delete(10000)
       });
      }

      const May282018 = [
        "\`\`\`diff"+
        "\nWinry v3.5.1\n"+
        "\n+ Added Fun Command \"w!ascii\" on Fun Category"+
        "\`\`\`"
      ]

      const May272018 = [
        "\`\`\`diff"+
        "\nWinry v3.4.1\n"+
        "\n+ Added NSFW Commands \"w!rule34 and w!snap\""+
        "\n+ Added \"w!updatelogs\" command to stay updated"+
        "\n+ Fix typo description"+
        "\n+ All commands now have descriptions"+
        "\n+ More NSFW commands coming soon™"+
        "\`\`\`"
        ]

        const May252018 = [
          "\`\`\`diff"+
          "\n+ Added NSFW Command \"w!teen\""+
          "\`\`\`"
          ]

      message.channel.send(
      "**May 28 2018 Update:**\n" + May282018 +
      "\n\n**May 27 2018 Updates:**\n" + May272018 + 
      "\n\n" + "**May 25 2018 Update:**\n" + May252018)
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
