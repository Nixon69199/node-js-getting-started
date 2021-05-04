// Import the discord.js module
const { Client, Intents } = require('discord.js');

// Create an instance of a Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] 

cli
        var http = require('http');

http.createServer(function (req, res) {
  res.write("I'm alive XD");
  res.end();
}).listen(8080);

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.resolve(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.channel.send(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {

        message.channel.send("That user isn't in this guild!");
      }
    } else {
      message.channel.send("You didn't mention the user to kick!");
    }
  }
});





client.login('ODM4ODI3NDU1Njk1NDIxNTAx.YJAw8g.apNu6qRPwNPMlm2KbQd9we7wcfw')
