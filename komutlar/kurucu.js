  
module.exports = {
  kod: "kurucu",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('BENIM GERÇEK KURUCUM rotanizm#1029 Bilginize')
      .addField('TIKTOK  ', '[TİKTOK](https://www.tiktok.com/@rota.exe)')
      .addField('INSTAGRAM  ', '[INSTAGRAM](https://www.instagram.com/rotanizm.exe/)')
      message.channel.send(embed)
    }
 }
