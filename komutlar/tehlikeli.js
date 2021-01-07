module.exports = {
  kod: "tehlikeli",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
      const embed = new  MessageEmbed()
      .setTitle('gElİşİmin açISınDan tEhliKeLİyiM hEp dEriM hErkEs beNi dİnlEmeSin')
      message.channel.send(embed)
    }
 }
