module.exports = {
  kod: "diğer",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('Diğer Komutlar')
      .addField('Diğer Komutlar', '+sil <sayı> | +avatar <kişi> | +ping | +destek | +davet | +çekiliş <süre> <sebep> | ')
      message.channel.send(embed)
    }
 }
