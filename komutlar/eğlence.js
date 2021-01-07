module.exports = {
  kod: "eğlence",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('Eğlence Komutları')
      .addField('Eğlence Komutları ', ' +kansahibi | +kibir | +kıvılcım | +ıslakkum | +zamandayolculuk | **Not: Daha Tamamlanmadı** ')
      message.channel.send(embed)
    }
 }
