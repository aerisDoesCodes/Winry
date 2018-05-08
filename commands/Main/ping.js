const { Command } = require('klasa');

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      description: 'See how long it takes for the bot to respond.'
    });
  }

  async run(msg) {
    const message = await msg.send('Ping?');
    return msg.send(`Pong! \`${message.createdTimestamp - msg.createdTimestamp}ms\`.`);
  }

};
