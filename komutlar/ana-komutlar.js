module.exports = {
  kod: "ana-komutlar",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('Ana Komutlar')
      .addField('Ana Komutlar', '+çal <şarkıismi> Şarkı Çalar\n +ayrıl Bot Sesli Kanaldaysa Ayrılır\n +kullanıcıbilgi <kişi> Kişinin Kullanıcı Bilgilerini Gösterir\n +sunucubilgi Sunucunun Bilgilerini Gösteririr\n +destek Botun Destek Sunucusunu Gösterir\n +davet Botu Sunucunusa Ekleme Linkini Gösterir ')
      message.channel.send(embed)
    }
 }
