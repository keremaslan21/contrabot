module.exports = {
  kod: "sil",
  async run (client, message, args) {
    if (isNaN(args)) return message.reply('Kanka Sayı Girmen Lazım');
    if (args < 2 || args > 100)  return message.reply('2 Den Az 100 Den Fazla Mesaj Silemem')
    message.channel.bulkDelete(Number(args))
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Sildim Kanks Mesajları')
    .setDescription('Sildiğim Mesaj Sayısı: ' + args)
    message.channel.send(embed).then(mesaj => {
      setTimeout(function () {
        mesaj.delete()
      }, 5000);
    })
   }
}
