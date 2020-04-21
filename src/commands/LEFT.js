const {Command, flags} = require('@oclif/command')

class LeftCommand extends Command {
  async run() {
    const {flags} = this.parse(LeftCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/jessicajeong/Sites/Others/toy-robot/src/commands/LEFT.js`)
  }
}

LeftCommand.description = `Describe the command here
...
Extra documentation goes here
`

LeftCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = LeftCommand
