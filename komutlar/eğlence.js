module.exports = {
  kod: "eğlence",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('Eğlence Komutları')
      .addField('Eğlence Komutları ', ' +kansahini Kan Sahibi Adlı Şarkıdan Bi Parça Gösterir\n +kibir Kibir Adlı Şarkıdan Bi Parça Gösterir\n +ıslakkum Islak Kum Adlı Şarkıdan Bi Parça Gösterir\n +kıvılcım Kıvılcım Adlı Şarkıdan Bi Parça Gösterir\n +tehlikeli Tehlikeli Adlı Şarkıdan Bi Parça Gösterir\n +zamandayolculuk Zamanda Yolculuk Adlı Şarkıdan Bi Parça Gösterir\n **Not: Daha Tamamlanmadı**')
      message.channel.send(embed)
    }
 }
