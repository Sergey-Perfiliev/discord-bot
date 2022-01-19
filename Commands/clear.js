module.exports = {
	name: 'clear',
	description: 'Clear messages',
	async execute(message, args) {
		// get administrator role
		const adminRole = message.guild.roles.cache.find(role => role.name === 'Administrator')

		// check permission
		if (message.member.roles.cache.some(r => ['Creator', 'Administrator'].includes(r.name))) {
			if (!args[0]) return message.reply('Please, enter the amount!')
			if (isNaN(args[0])) return message.reply('Please, enter number!')
			if (args[0] > 100) return message.reply("You can't delete more than 100 messages!")
			if (args[0] < 1) return message.reply("You must delete at lease one message!")

			// bulk delete - delete messages
			await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
				message.channel.bulkDelete(messages)
			})
		} else {
			message.reply("No such permissions!")
		}
	}
}
