module.exports = {
  kod: "ban",
   async run (client, message, args) {
     if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("`Lan Yetkin Yok Yetki Alda Gel Tek Gelirim Tek Giderim `")
    const  args1 = message.content.split(' ').slice(2)
    const neden = args1.join(" ")
    const { MessageEmbed } = require ('discord.js')
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Herkes Arzularken Ben Siker Geçerim :sunglasses:  Tekmelediğim Herif ${user.tag} :middle_finger: `);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('Herkes Arzularken Ben Siker Geçerim :sunglasses:');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("ERROR!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("ERROR!");
    }
 }
};
