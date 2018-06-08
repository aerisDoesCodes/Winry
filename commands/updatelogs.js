const cooldown = new Set();

exports.run = (client, message, args, level) => {
  if (cooldown.has(message.author.id)) {
       return message.channel.send(`**${message.author.username}, please cool down! (3 seconds)**`).then(m => {
         m.delete(10000)
       });
      }

      const v401 = [
        "\`\`\`diff"+
        "\nWinry v4.0.1\n"+
        "\n+ Fix error on set command \"w!set\" at System category (you can change prefix by w!set edit prefix PREFIX_HERE)"+
        "\n+ \"@Winry#5607 prefix\" to check the server prefix"+
        "\n+ Added Winry to VPS for better quality. Donate to https://www.paypal.me/JohnLoveCookies to keep Winry alive!"+
        "\`\`\`"
      ]

      const v400 = [
        "\`\`\`diff"+
        "\nWinry v4.0.0\n"+
        "\n+ Changes char amount of command \"w!password\""+
        "\n+ Changes function of command \"updatelogs\""+
        "\n+ Updated dependencies"+
        "\`\`\`"
      ]
    
      const v381 = [
        "\`\`\`diff"+
        "\nWinry v3.8.1\n"+
        "\n+ Added new Fun command \"w!password\""+
        "\n+ Added new a function where you can choose your option on \"w!password\" command"+
        "\n+ catch error if dm is close on \"w!password\" command"+
        "\`\`\`"
      ]
      const v360 = [
        "\`\`\`diff"+
        "\nWinry v3.6.0\n"+
        "\n+ Added new NSFW command \"w!catsu\""+
        "\n+ Added new Image command \"w!bunny\""+
        "\n+ Updated command description"+
        "\n- Remove the cool invite link(invite.gg)"+
        "\n+ Updated invite link \"w!invite\""+
        "\`\`\`"
      ]
    
      const v351 = [
        "\`\`\`diff"+
        "\nWinry v3.5.1\n"+
        "\n+ Added Fun Command \"w!ascii\" on Fun Category"+
        "\`\`\`"
      ]
    
      const v341 = [
        "\`\`\`diff"+
        "\nWinry v3.4.1\n"+
        "\n+ Added NSFW Commands \"w!rule34 and w!snap\""+
        "\n+ Added \"w!updatelogs\" command to stay updated"+
        "\n+ Fix typo description"+
        "\n+ All commands now have descriptions"+
        "\n+ More NSFW commands coming soon™"+
        "\`\`\`"
        ]
    
    const collector = message.channel.createMessageCollector(m => m.author === message.author, {
      time: 25000
    });
    message.channel.send("Which version updates would you want to see? Type: `cancel` to cancel\n List:\nv401, v400, v381, v360, v351, v341"+
    "\n\nPlease type the version you want. Example: v400")
    collector.on("message", m => {
      if (m.content.toUpperCase() === "V401") collector.stop("v401");
      if (m.content.toUpperCase() === "V400") collector.stop("v400");
      if (m.content.toUpperCase() === "V381") collector.stop("v381");
      if (m.content.toUpperCase() === "V360") collector.stop("v360");
      if (m.content.toUpperCase() === "V351") collector.stop("v351");
      if (m.content.toUpperCase() === "V341") collector.stop("v341");
      if (m.content.toUpperCase() === "CANCEL") collector.stop("aborted");
    });
    collector.on("end", (collected, reason) => {
      if (reason === "time") return message.channel.send("The prompt timed out...");
      if (reason === "aborted") return message.channel.send("The command has been aborted");
      if (reason === "v401") {
        message.channel.send("**June 8 2018 Updates:**" + v400)
      }
      if (reason === "v400") {
        message.channel.send("**May 30 2018 Updates:**" + v400)
      }
      if (reason === "v381") {
        message.channel.send("**May 30 2018 Update:**" + v381)
      }
      if (reason === "v360") {
        message.channel.send("**May 30 2018 Updates:**" + v360)
      }
      if (reason === "v351") {
        message.channel.send("**May 28 2018 Update:**" + v351)
      }
      if (reason === "v341") {
        message.channel.send("**May 27 2018 Updates:**" + v341)
      }
    });
  cooldown.add(message.author.id);
     setTimeout(() => {
       cooldown.delete(message.author.id);
     }, 3000);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['logs', 'updates', 'changelog'],
  permLevel: "User"
};

exports.help = {
  name: "updatelogs",
  category: "Utility",
  description: "Checks Winry's updates.",
  usage: "updatelog"
};
