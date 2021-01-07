module.exports = {
  kod: "ana-komutlar",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('Ana Komutlar')
      .addField('Ana Komutlar', '+çal <şarkıismi> | +gununşarkısı  | +sunucubilgi | +kullanıcıbilgi <kişi>  | ')
      message.channel.send(embed)
    }
 }
