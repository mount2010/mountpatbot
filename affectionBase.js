const commando = require("discord.js-commando");

module.exports = class AffectionBase extends commando.Command {
	constructor (client, name, description, defaultArgs = true) {
			const opt = {
				name: name,
				description: description,
				group: "pats",
				memberName: name,
			};
			if (defaultArgs) {
				opt.args = [
					{
						key: "user",
						prompt: `Who do ya wanna ${name}?`,
					type: "user"
					}
				]
			}
			super(client, opt);
	}
	run (msg, args) {
		msg.reply("Tell the owner he didn't subclass an abstract class");
	}
}
