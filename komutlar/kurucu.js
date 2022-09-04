  
module.exports = {
  kod: "kurucu",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('BENIM GERÇEK KURUCUM Kaname#8932 Bilginize')
      .addField('INSTAGRAM  ', '[INSTAGRAM](https://www.instagram.com/qwx.katsui//)')
      message.channel.send(embed)
    }
 }
