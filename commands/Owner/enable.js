const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			permLevel: 10,
			description: 'Re-enables or temporarily enables a command/inhibitor/monitor/finalizer. Default state restored on reboot.',
			usage: '<Command:cmd|Inhibitor:inhibitor|Monitor:monitor|Finalizer:finalizer|Event:event>'
		});
	}

	async run(msg, [piece]) {
		piece.enable();
		return msg.sendCode('diff', `+ Successfully enabled ${piece.type}: ${piece.name}`);
	}

};
