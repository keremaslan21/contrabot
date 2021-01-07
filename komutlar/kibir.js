module.exports = {
  kod: "kibir",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('bEn öĞreTMeNe gErEK duYmAdIm hİç hİTap eDiyOmuŞUm eRgenLerE')
      message.channel.send(embed)
    }
 }
