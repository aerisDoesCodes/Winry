const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, { description: 'See how long it takes for the bot to respond.' });
	}

	async run(msg) {
    var uh = [
      "What are you doing?",
      "Am I even a thing?",
      "OwO what is this?",
      "Pong!",
      "Are you a bot?",
      "Error, blame kyle!",
      "Noticed me senpai!",
      "Does people even use this?",
      "Is this thing even working?",
      "Who are you?",
      "Why should I even do this?",
      "A thing is a thing!",
      "Yes, I am alive!",
      "uh?"
    ]
		const message = await msg.send('Ping?');
		return msg.send('ℹ | Pong!' + ' '  + uh[Math.floor(Math.random() * pong.length)] + ' - ' + `Response time: **${message.createdTimestamp - msg.createdTimestamp}ms**`);
	}
};
