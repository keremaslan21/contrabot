module.exports = {
  kod: "destek",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('Botun Destek Sunucusuna Katılmak İçin Alltaki Destek Yazısına Basman Yeterli :wink:')
      .addField('Desteke Tıkla ! ', '[Destek](https://discord.gg/tXdHTbGzBc)')
      message.channel.send(embed)
    }
 }
