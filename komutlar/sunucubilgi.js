module.exports = {
  kod: "sunucubilgi",
   async run (client, message, args) {
     const { MessageEmbed } = require('discord.js')
     var guild = message.guild
     var kanallar = guild.channels.cache
     var üyeler = guild.members.cache
     var emojiler = guild.emojis.cache
     var roller = guild.roles.cache
     var embed = new MessageEmbed()
     .setTitle(`${guild.name} Adlı Sunucunun Bilgileri!`)
     .setThumbnail(guild.iconURL({ dynamic: true }))
     .addField('**TEMEL BİLGİLER**', [
       `**Sunucunun Adı** ${guild.name} `,
       `**Sunucu ID**: ${guild.id}`,
       `**Sunucu Sahibi:** <@${guild.owner.id}>`
     ])
     .addField('**İstatistikler**', [
      `**Üye Sayısı:** ${guild.memberCount}` ,
      `**Emoji Sayısı:** ${emojiler.size}`,
      `**Rol Sayısı:** ${roller.size}`,
      `**Kanal Sayısı: ${kanallar.size}`,
      `**Metin Kanalı Sayısı:** ${kanallar.filter(kanal => kanal.type === 'text').size}`,
      `**Ses Kanalı Sayısı:** ${kanallar.filter(kanal => kanal.type === 'voice').size}`,
      `**Kategori  Sayısı:** ${kanallar.filter(kanal => kanal.type === 'category').size}`
    ])
    message.channel.send(embed)
   }
}
