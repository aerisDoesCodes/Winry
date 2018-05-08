// const answers = ["Maybe.",
// "Certainly not.",
// "I hope so.",
// "Not in your wildest dreams.",
// "There is a good chance.",
// "Quite likely.",
// "I think so.",
// "I hope not.",
// "I hope so.",
// "Never!",
// "Fuhgeddaboudit.",
// "Ahaha! Really?!?",
// "Pfft.",
// "Sorry, bucko.",
// "Hell, yes.",
// "Hell to the no.",
// "The future is bleak.", 
// "The future is uncertain.",
// "I would rather not say.",
// "Who cares?",
// "Possibly.",
// "Never, ever, ever.",
// "There is a small chance.",
// "Yes!"];


// module.exports = class extends Command {

//   constructor(...args) {
//     super(...args, {
//       description: 'Magic 8-Ball, does exactly what the toy does. (Results may vary)',
//       usage: '<query:str>',
//       runIn: ['text'] });
//     }

//     if (msg.content.endsWith("?")) {
//       msg.reply(`🎱 ${answers[Math.floor(Math.random() * answers.length)]}`).catch(err => client.funcs.log(err.stack, "error"));
//     } else {
//       msg.reply("🎱 That doesn't look like a question, try again please.").catch(err => client.funcs.log(err.stack, "error"));
//     }
//   }
