import {Command} from '@oclif/command'
import MoveHistoryAPI from '../../api/moveHistoryAPI'

export default class Place extends Command {
  static description = 'This command is used for placing the toy robot on a 5x5 grid.'

  static args = [
    {name: 'xCoord', required: true, description: 'please enter the x coordinate!'},
    {name: 'yCoord', required: true, description: 'please enter the y coordinate!'},
    {name: 'facing', required: true, description: 'please define where the robot should be facing!'},
  ]

  async run() {
    const {args} = this.parse(Place)
    const xVal = parseInt(args.xCoord)
    const yVal = parseInt(args.yCoord)
    const fVal = String(args.facing)
    if (xVal <= 4 && yVal <= 4 && fVal != null ) {
      this.log('Success!')
    } else {
      this.error('Cannot place the robot outside of the grid!')
    }
  }
}
