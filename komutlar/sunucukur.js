module.exports = {
    kod: "sunucukur",
    async run (client, message, args) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Valla Yetkin Yok')
    message.guild.channels.cache.forEach((item, i) => {
      item.delete()
  })
      message.guild.channels.create('Ana Sayfa', { type: 'category', }).then(anasayfa => {
        message.guild.channels.create('Ses Kanalları', { type: 'category', }).then(seskanalları => {
          message.guild.channels.create('chat', { type: 'text' }).then(chat => {
            chat.setParent(anasayfa.id)
          })
          message.guild.channels.create('bot-komut', {type: 'text', }).then(chat => {
            chat.setParent(anasayfa.id)
          })
          message.guild.channels.create('photo-chat', {type: 'text', }).then(chat => {
            chat.setParent(anasayfa.id)
          })
          message.guild.channels.create('Genel 1', {type: 'voice', }).then(chat => {
            chat.setParent(seskanalları.id)
          })
          message.guild.channels.create('Genel 2', {type: 'voice', }).then(chat => {
            chat.setParent(seskanalları.id)
          })
          message.guild.channels.create('Genel 3', {type: 'voice', }).then(chat => {
            chat.setParent(seskanalları.id)
          })
        })
      })
     message.guild.roles.create({ data: { name: "Admin", color: "BLACK", permissions: ["ADMINISTRATOR"]}})
      message.guild.roles.create({ data: { name: "Moderator", color: "BLUE", permissions: ["MANAGE_CHANNELS"]}})
       message.guild.roles.create({ data: { name: "Sorumlu", color: "GREEN", permissions: ["MANAGE_ROLES"]}})
        message.guild.roles.create({ data: { name: "Kadın", color: "PİNK", }})
         message.guild.roles.create({ data: { name: "Erkek", color: "BLUE", }})
  }
}
