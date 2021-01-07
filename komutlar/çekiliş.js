module.exports = {
    kod: "çekiliş",
    async run (client, message, args) {
     const { MessageEmbed }  = require('discord.js')
       let time = args[0]
       let ödülargs = message.content.split(' ').slice(2)
       let ödül = ödülargs.join(" ")
      if (isNaN(time)) return;
      const embed1 = new MessageEmbed()
      .setTitle('Çekiliş Başladı')
     .setDescription(ödül)
     .setFooter('Çekiliş ' + time + ' Saniye Sonra Açıklanacak Şimdiden Bol Şans Reisler')
     const embed2 = new MessageEmbed()
     .setDescription('Çekilişin Sonucunda Kazanan Kişi - <@' + message.guild.members.cache.random() + '>')
     .setTitle(ödül)
     .setFooter('Tebrikler ')
     message.channel.send(embed1).then(embed => {
     setTimeout(function () {
      embed.edit(embed2)
    }, time * 1000);
   })
     }
  }
