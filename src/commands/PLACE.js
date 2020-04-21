const {Command, flags} = require('@oclif/command')

class PlaceCommand extends Command {
  async run() {
    const {flags} = this.parse(PlaceCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/jessicajeong/Sites/Others/toy-robot/src/commands/PLACE.js`)
  }
}

PlaceCommand.description = `Describe the command here
...
Extra documentation goes here
`

PlaceCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = PlaceCommand
