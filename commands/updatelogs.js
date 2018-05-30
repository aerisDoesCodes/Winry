const cooldown = new Set();

exports.run = (client, message, args, level) => {
  if (cooldown.has(message.author.id)) {
       return message.channel.send(`**${message.author.username}, please cool down! (3 seconds)**`).then(m => {
         m.delete(10000)
       });
      }

      const May3012018 = [
        "\`\`\`diff"+
        "\nWinry v3.8.1\n"+
        "\n+ Added new Fun command \"w!password\""+
        "\n+ Added new a function where you can choose your option on \"w!password\" command"+
        "\n+ catch error if dm is close on \"w!password\" command"+
        "\`\`\`"
      ]
      const May302018 = [
        "\`\`\`diff"+
        "\nWinry v3.6.0\n"+
        "\n+ Added new NSFW command \"w!catsu\""+
        "\n+ Added new Image command \"w!bunny\""+
        "\n+ Updated command description"+
        "\n- Remove the cool invite link(invite.gg)"+
        "\n+ Updated invite link \"w!invite\""+
        "\`\`\`"
      ]

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

      message.channel.send(
      "\n\n**May 30 2018 Update:**\n" + May3012018 +
      "\n\n**May 30 2018 Updates:**\n" + May302018 +
      "\n\n**May 28 2018 Update:**\n" + May282018 +
      "\n\n**May 27 2018 Updates:**\n" + May272018)
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
  description: "Checks Winry's updates.",
  usage: "updatelog"
};
