module.exports = {
  kod: "avatar",
  async run (client, message, args) {
   const { MessageEmbed } = require('discord.js')
   const user = message.mentions.users.first()
   if (user) {
     const embed = new MessageEmbed()
     .setTitle('İşte Avatarın Reİs')
     .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }))
     message.channel.send(embed)
   } else {
     const embed = new MessageEmbed()
     .setTitle('İşte Avatarın Reİs')
     .setImage(message.author.displayAvatarURL({ dynamic: true,  size: 2048 }))
     message.channel.send(embed)
   }
 }
}
