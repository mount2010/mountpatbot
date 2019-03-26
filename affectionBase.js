const commando = require("discord.js-commando");

module.exports = class AffectionBase extends commando.Command {
	constructor (client, name, description) {
			super(client, {
				name: name,
				description: description,
				group: "pats",
				memberName: name,
				args: [
					{
						key: "user",
						prompt: `Who do ya wanna ${name}?`,
					type: "user"
				}
			]
		});
	}
	run (msg, args) {
		msg.reply("Tell the owner he didn't subclass an abstract class");
	}
}
