module.exports = {
    kod: "kıvılcım",
    async run (client, message, args) {
      const { MessageEmbed } = require('discord.js')
        const embed = new  MessageEmbed()
        .setTitle('iÇim aLev alEV yAnıyOr')
        message.channel.send(embed)
      }
   }