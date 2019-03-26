const Base = require(`${process.cwd()}/affectionBase.js`);

module.exports = class NudgeCommand extends Base {
	constructor(client) {
		super(client, "nudge", "Nudge somebody lightly!");
	}
	run(msg, args) {
		const username = args.user.username;
		const authorname = msg.author.username;
		const embed = {
			title: "Nudgey nudgey!",
			description: `${authorname} nudges ${username} :O`
		}
		msg.embed(embed);
	}
}
