const Base = require(`${process.cwd()}/affectionBase.js`);

module.exports = class BopCommand extends Base {
	constructor(client) {
		super(client, "bop", "Bop somebody on the nose! :3");
	}
	run(msg, args) {
		const username = args.user.username;
		const authorname = msg.author.username;
		const embed = {
			title: "*nosepoke*",
			description: `${authorname} sinks their nose into ${username} :O`
		}
		msg.embed(embed);
	}
}
