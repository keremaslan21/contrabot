module.exports = {
kod: "ayrıl",
async run (client, message, args) {
 if (!message.member.voice.channel) return.message.channel.send('Kanka Sesli Kanalda dEğiLsiN');
 if (!message.guild.me.voice.channel) return message.channel.send('kAnkA sEsli Kanalda dEğİLİm')
 message.member.voice.leave()
 message.channel.send('Sesli Kanaldan Çıktım Brom')
}
}
