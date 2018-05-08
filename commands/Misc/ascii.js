const { Command } = require('klasa')
const snekfetch = require('snekfetch')

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      description: 'Changes text into ascii.',
      usage: '-ascii <text>',
      runIn: ['text']
    })
  }

  async run(msg, args) {
    args.splice(0, 1)
    let inputting = args.join(" ")
    if (args < 1) {
      return msg.channel.send("Input something in the command!")
    } else {
      snekfetch.get(`http://artii.herokuapp.com/make?text=${inputting}`)
      .then(ascii => {
        if (ascii.text.length > 1999) return msg.edit('Output too long. Try shorter text.').then(msg => msg.delete(2000))
        return msg.delete().then(msg.channel.send(`\`\`\`${ascii.text}\`\`\``))
      })
    }
  }
}
