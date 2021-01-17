module.exports = {
  kod: "oy",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('Bota Oy Verme Linki')
      .addField('', '[Oy](https://top.gg/bot/792336223108333598/vote)')
      message.channel.send(embed)
    }
 }
