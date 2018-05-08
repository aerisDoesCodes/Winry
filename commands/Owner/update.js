let { Command } = require('klasa')

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      description: 'Bot developer\'s command'
    })
  }

  async run(msg) {
    let args = message.content.split(' ').slice(1).join(' ');
    if (msg.author.id !== '255815122616844288')
    if (msg.author.id !== '241216483592634368') return msg.reply('\`❌\` | Only the Bot Developer can execute this command.');
    if (!args) {
      return msg.channel.send('Give my something to update')
    }
    let embed = new this.client.methods.Embed();
    embed.setAuthor(`${this.client.user.username}`, `${this.client.user.displayAvatarURL}`)
    .addField('Updates', `**${args}**`)
    .setColor(member.highestRole.color)
    .setTimestamp()
    this.client.guilds.get('336263207998062592').channels.get('336263494158516224').send({embed}); {
      return msg.react('👌')
    }
  }
}
