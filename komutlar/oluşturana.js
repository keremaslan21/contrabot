module.exports = {
  kod: "oluşturana",
  async run (client, message, args) {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Yetkin Yoksa Yürü Karşim')
  message.guild.channels.create('chat', { type: 'text' })
  message.guild.channels.create('bot-komut', { type: 'text' })
  message.guild.channels.create('photo-chat', { type: 'text' })
  message.channel.send('ANA SAYFA OLUŞTURULDU SANA KATEGORİLERE YERLEŞTİRMEK DÜŞER ')
 }
}
