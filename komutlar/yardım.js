module.exports = {
  kod: "yardım",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('Botun Komutları')
      .setDescription(` :wave: +ana-komutlar :wrench: +moderasyon :scroll: +diğer :tada: +eğlence`)
      message.channel.send(embed)
    }
 }
