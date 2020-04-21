const {Command, flags} = require('@oclif/command')

class MoveCommand extends Command {
  async run() {
    const {flags} = this.parse(MoveCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/jessicajeong/Sites/Others/toy-robot/src/commands/MOVE.js`)
  }
}

MoveCommand.description = `Describe the command here
...
Extra documentation goes here
`

MoveCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = MoveCommand
