const {Command, flags} = require('@oclif/command')

class ReportCommand extends Command {
  async run() {
    const {flags} = this.parse(ReportCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/jessicajeong/Sites/Others/toy-robot/src/commands/REPORT.js`)
  }
}

ReportCommand.description = `Describe the command here
...
Extra documentation goes here
`

ReportCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ReportCommand
