module.exports = {
  kod: "moderasyon",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('Moderasyon Komutları')
      .addField('Moderasyon Komutları', ' +kanalsil <kanal> | +kick <kişi> | +ban <kişi> |')
      message.channel.send(embed)
    }
 }
