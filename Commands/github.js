module.exports = {
	name: 'github',
	description: "github command - send author link",
	github: "https://github.com/Sergey-Perfiliev",
	execute(message, args) {
		if (message.member.roles.cache.has('931570340419756112')) {
			if (message.member.roles.cache.some(r => r.name === "TEST ROLE")) {
				message.channel.send(this.github)
			} else {
				message.channel.send('No such permissions!')
			}
		}
	}
}
