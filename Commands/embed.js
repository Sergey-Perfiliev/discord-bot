module.exports = {
	// test embed
	name: 'embed',
	description: "Embeds",
	execute(message, args, MessageEmbed) {
		const newEmbed = new MessageEmbed()
			.setColor('#FF2D00')
			.setTitle('Rules')
			.setURL('https://google.com')
			.setDescription('this is a embed for the sever rules')
			.addFields(
				{ name: 'Rule 1', value: 'No flood' },
				{ name: 'Rule 2', value: 'No bad words' }
			)
			.setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/800px-Google_Images_2015_logo.svg.png')
			.setFooter({ text: 'Make sure to check out the rules channel' })

		message.channel.send({ embeds: [newEmbed] });
	}
}
