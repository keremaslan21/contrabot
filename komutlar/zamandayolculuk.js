module.exports = {
  kod: "zamandayolculuk",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('bEn vE öMeR seyFeTTin bİ siGarA kEşfeTTik İçiP 2012yE gEldİk')
      message.channel.send(embed)
    }
 }
