module.exports = {
    kod: "ıslakkum",
    async run (client, message, args) {
      const { MessageEmbed } = require('discord.js')
        const embed = new  MessageEmbed()
        .setTitle('aDınI yAzSam sAhiLiMin ısLakKumlArIna')
        message.channel.send(embed)
      }
   }