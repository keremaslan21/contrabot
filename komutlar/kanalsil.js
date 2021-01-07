module.exports = {
  kod: "kanalsil",
  async run (client, message, args) {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Yetkin Yoksa Başka Kapıya :wink: ')
  let kanal = message.mentions.channels.first()
   kanal.delete()
 }
}
