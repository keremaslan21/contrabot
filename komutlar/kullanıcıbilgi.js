const moment = require('moment')
require('moment-duration-format')
module.exports = {
  kod: "kullanıcıbilgi",
  async run (client, message, args){
  const { MessageEmbed } = require('discord.js')
  let üye = message.mentions.users.first()
  if (üye){
    let durum = üye.presence.status
    .replace('online', 'Çevrimiçi')
    .replace('idle', 'Boşta')
    .replace('dnd', 'Rahatsız Etmeyin')
    .replace('offline', 'Çevrimdışı')
  const  embed = new MessageEmbed()
   .setThumbnail(üye.displayAvatarURL({ dynamic: true }))
   .setColor('YELLOW')
   .setTitle(üye.username)
   .setDescription(üye.tag + ` Kişisinin Bilgileri:\n\n Kullanıcı Adı: ${üye.username}\nEtiket: ${üye.discriminator}\nKULLANICI ID: ${üye.id}\nSon Mesaj: ${üye.lastMessage}\nBu Kullanıcı Bot Mu: ${üye.bot ? 'Evet' : 'Hayır'}\nKullanıcı Aktivite: ${üye.presence.activities[0].state}\nÜye Durummu: ${durum}\nKuruluş Tarihi: ${moment(üye.createdAt).format('DD')}/${moment(üye.creadet).format('MM')}/${moment(üye.createdAt).format('YY HH:mm:ss')}\nRoller: ${message.guild.members.cache.get(üye.id).roles.cache.filter(r => r !== '@everyone').map(ro => ro).join(' | ')} ` )
   message.channel.send(embed)
  } else {
    üye = message.author
    let durum = üye.presence.status
    .replace('online', 'Çevrimiçi')
    .replace('idle', 'Boşta')
    .replace('dnd', 'Rahatsız Etmeyin')
    .replace('offline', 'Çevrimdışı')
  const  embed = new MessageEmbed()
   .setThumbnail(üye.displayAvatarURL({ dynamic: true }))
   .setColor('YELLOW')
   .setTitle(üye.username)
   .setDescription(üye.tag + ` Kişisinin Bilgileri:\n\n Kullanıcı Adı: ${üye.username}\nEtiket: ${üye.discriminator}\nKULLANICI ID: ${üye.id}\nSon Mesaj: ${üye.lastMessage}\nBu Kullanıcı Bot Mu: ${üye.bot ? 'Evet' : 'Hayır'}\nKullanıcı Aktivite: ${üye.presence.activities[0].state}\nÜye Durummu: ${durum}\nKuruluş Tarihi: ${moment(üye.createdAt).format('DD')}/${moment(üye.creadet).format('MM')}/${moment(üye.createdAt).format('YY HH:mm:ss')}\nRoller: ${message.guild.members.cache.get(üye.id).roles.cache.filter(r => r !== '@everyone').map(ro => ro).join(' | ')} ` )
   message.channel.send(embed)
   }
  }
}
