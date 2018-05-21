/*
The HELP command is used to display every command's name and description
to the user, so that he may see what commands are available. The help
command is also filtered by level, so if a user does not have access to
a command, it is not shown to them. If a command name is given with the
help command, its extended help is shown.
*/
const Discord = require("discord.js");
const embed = new Discord.RichEmbed();
const cooldown = new Set();

exports.run = (client, message, args, level) => {
  if (cooldown.has(message.author.id)) {
       return message.channel.send(`**${message.author.username}, please cool down! (3 seconds)**`).then(m => {
         m.delete(10000)
       });
      }
  if (!args[0]) {
    // const myCommands = message.guild ? client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level) : client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level &&  cmd.conf.guildOnly !== true);
    //
    // const commandNames = myCommands.keyArray();
    // const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    //
    // let currentCategory = "";
    // let output = `**Use ${message.settings.prefix}help <commandName> for details**`;
    // const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
    // sorted.forEach( c => {
    //   const cat = c.help.category.toProperCase();
    //   if (currentCategory !== cat) {
    //     output += `\u200b\n\n**${cat}**\n`;
    //     currentCategory = cat;
    //   }
    //   output += `\`${message.settings.prefix}${c.help.name}\` `;
    // });
    // message.channel.send(output + "\n\nA very cool invite link: https://invite.gg/justabot")
    const pr = message.settings.prefix
    embed.addField("Help Command", "[Support Server](https://discord.gg/HWEMcEY) | [Bot Invite](https://discordapp.com/oauth2/authorize?client_id=442917513454682122&permissions=201386057&scope=bot)"+
    "\n**Server Prefix:** ${message.settings.prefix}\n**More Help:** ${message.settings.prefix}help <commandName>")
    .addField('<:ImageManipulation:448118659668246529> Image Manipulation', `\`${pr}achievement\`, \`${pr}bug\`, \`${pr}error\`, \`${pr}news\`, \`${pr}nut\`, \`${pr}penis\`, \`${pr}step\`, \`${pr}tobe\``)
    .addField('<:ImageManipulation:448118659668246529> Images', `\`${pr}anime\``)
    .addField('<:utility:423310165417263104> Utility', `\`${pr}info\`, \`${pr}invite\`, \`${pr}mylevel\`, \`${pr}ping\`, \`${pr}stats\`​`)
    .addField('<:Cumdrizzle:448119014909280266> NSFW', `\`${pr}ass\`, \`${pr}boobs\`, \`${pr}neko\`, \`${pr}pantsu\`, \`${pr}pussy\`​`)
    .addField('<:stafftools:448118904569593866> System', `\`${pr}eval\`, \`${pr}help\`, \`${pr}post\`, \`${pr}reboot\`, \`${pr}reload\`, \`${pr}set\` ​`)
    .setColor('#f1f199')
    message.channel.send({embed})

  } else {
    // Show individual command's help.
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      if (level < client.levelCache[command.conf.permLevel]) return;
      message.channel.send(`**Name:** ${command.help.name}\n**Description:** ${command.help.description}\n**Usage:** ${command.help.usage}\n**Aliases**: ${command.conf.aliases.join(", ")}`);
    }
  }
  cooldown.add(message.author.id);
     setTimeout(() => {
       cooldown.delete(message.author.id);
     }, 3000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h", "halp"],
  permLevel: "User"
};

exports.help = {
  name: "help",
  category: "System",
  description: "Displays all the available commands for your permission level.",
  usage: "help [command]"
};
