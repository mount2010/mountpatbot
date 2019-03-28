const Base = require(`${process.cwd()}/affectionBase.js`);

module.exports = class BounceCommand extends Base {
	constructor(client) {
		super(client, "bounce", "Biong biong!", false);
	}
	run(msg, args) {
//		const username = args.user.username;
		const authorname = msg.author.username;
		const embed = {
			title: "*biong*",
			description: `${authorname} bounces around fluffily!`
		}
		msg.embed(embed);
	}
}
