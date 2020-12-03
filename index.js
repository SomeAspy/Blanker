const { Plugin } = require('powercord/entities');

module.exports = class blanker extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'blank',
      description: 'Send an empty message using a zero width character',
      usage: '{c} blank',
      executor: (args) => ({
        send: true,
        result: '​'
      })
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('blanker');
  }
};