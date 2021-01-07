module.exports = {
  kod: "davet",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('Botun Davet Linki !')
      .addField('Aşağıdaki Davete Tıklayarak Botu Ekleyebilirsin ', '[Davet](https://discord.com/oauth2/authorize?client_id=792336223108333598&scope=bot&permissions=268435518)')
      message.channel.send(embed)
    }
 }
