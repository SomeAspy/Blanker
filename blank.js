const { Plugin } = require('powercord/entities');

module.exports = class Blank extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'blank',
      description: 'Send an empty message',
      executor: () => ({
        send: true,
        result: "https://cdn.discordapp.com/attachments/780975313555423272/780975323658453002/1x1.png"
      })
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('blank');
  }
};
