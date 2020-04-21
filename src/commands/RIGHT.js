const {Command, flags} = require('@oclif/command')

class RightCommand extends Command {
  async run() {
    const {flags} = this.parse(RightCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/jessicajeong/Sites/Others/toy-robot/src/commands/RIGHT.js`)
  }
}

RightCommand.description = `Describe the command here
...
Extra documentation goes here
`

RightCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = RightCommand
