module.exports = {
  kod: "moderasyon",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('Moderasyon Komutları')
      .addField('Moderasyon Komutları', ' +kanalsil <kanal> Etiketlediğiniz Kanalı Siler\n +kick <kişi> Etiketlediğiniz Kişiyi Kickler\n +ban <kişi> Etiketlediğiniz Kişiyi Banlar')
      message.channel.send(embed)
    }
 }
