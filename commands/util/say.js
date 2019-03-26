const commando = require("discord.js-commando");

module.exports = class SayCommand extends commando.Command {
	constructor (client) {
		super(client, {
			name: "say",
			description: "Make me say something!",
			memberName: "say",
			group: "util",
			args: [
				{
					key: "what",
					prompt: "Whyadda wanna say?",
					type: "string"
				}
			]
		});
	}
	run (msg, args) {
		msg.delete();
		msg.say(args.what);
	}
}
