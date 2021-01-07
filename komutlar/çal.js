const play = require('discordjs-ytdl')
const { MessageEmbed } = require('discord.js')
module.exports = {
  kod: "çal",
  async run (client, message, args){
    if (message.member.voice.channel){
      const embed = new MessageEmbed()
      .setTitle('Şarkı Bulundu')
      .setColor('RANDOM')
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dyanmic:true }))
      const connection = await message.member.voice.channel.join()
      play.play(connection, args.join(" "), 'AIzaSyCn9zvo4hJZTUJsX1wu2EHdM9jIkUeEFzs')
      let title = play.title(args.join(" "), 'AIzaSyCn9zvo4hJZTUJsX1wu2EHdM9jIkUeEFzs')
title.then(titlee => embed.addField('Videonun Başlığı :', titlee))
let kanal  = play.channel(args.join(" "), 'AIzaSyCn9zvo4hJZTUJsX1wu2EHdM9jIkUeEFzs')
kanal.then(titlee => embed.addField('KANAL ADI:  :',  titlee))
let id = play.id(args.join(" "), 'AIzaSyCn9zvo4hJZTUJsX1wu2EHdM9jIkUeEFzs')
id.then(titlee => embed.addField('VİDEO ID : ', titlee))
setTimeout(function () {
  message.channel.send(embed)
}, 2500);
} else {
      message.reply('**Lütfen Sesli Bir Kanala Katıl**')
    }
  }
}
