module.exports = {
  kod: "diğer",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('Diğer Komutlar')
      .addField('Diğer Komutlar', '+sil <sayı> Yazdıgınız Kadar Mesaj Siler\n +avatar <kişi> Etiketlediğiniz Kişinin Avatarını Gösterir\n +ping Botun Pingini Ölçer\n +çekiliş <süre> <sebep> Çekiliş Yapar ')
      message.channel.send(embed)
    }
 }
