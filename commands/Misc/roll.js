let { Command } = require('klasa')

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      aliases: ['dice'],
      description: 'Roll a dice.',
      runIn: ['text']
    })
  }

  async run(msg) {
    var dice = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
    ]
    var dicemath = Math.floor(Math.random() * dice.length);
    let embed = new this.client.methods.Embed();
    message.delete()
    embed.setAuthor('Roll Dice')
    .setDescription('🎲 You rolled a ' + dice[dicemath] + '!')
    //.setColor("")
    .setFooter(`Requested by: ${msg.author.tag}`)
    //.setThumbnail('Dice link here')
    msg.channel.send({embed})
  }
}
