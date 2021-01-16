const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");

exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const msg = message

   const sür = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const embed = new Discord.MessageEmbed()

  .setColor('RANDOM')
  .setFooter('Contra  \'Buyur benim istatistiklerim', bot.user.displayAvatarURL())
  .setThumbnail(bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
  .addField("» **Botun Sahibi**", "<698576146538692629>| ア🥀 🌙Kerem#2517  ")
  .addField("»  **Geliştirici** ","<698576146538692629>| ア🥀 🌙Kerem#2517 ")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)
  .addField("» **Çalışma süresi**", sür)
  .addField('» **Kullanıcılar**:', bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0))
  .addField("» **Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
  .addField("» **Kanallar**", bot.channels.cache.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ws.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
  .addField("**» Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=792336223108333598&scope=bot&permissions=268435518)")
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/dnjZxXZZ84)")
  .addField("**» Voteleme sayfası**", " [OYLAR MISIN?](https://top.gg/bot/792336223108333598/vote)")

 return message.channel.send(embed);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};
