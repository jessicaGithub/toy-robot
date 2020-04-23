import { Command } from "@oclif/command";
import moveHistoryAPI from "../api/move-history-api";

export default class Place extends Command {
  static description =
    "This command is used for placing the toy robot on a 5x5 grid.";

  static args = [
    {
      name: "xCoord",
      required: true,
      options: ["0", "1", "2", "3", "4"],
      description: "please enter the x coordinate!",
    },
    {
      name: "yCoord",
      required: true,
      options: ["0", "1", "2", "3", "4"],
      description: "please enter the y coordinate!",
    },
    {
      name: "facing",
      required: true,
      options: ["NORTH", "EAST", "SOUTH", "WEST"],
      description: "please define where the robot should be facing!",
    },
  ];

  async run() {
    const { args } = this.parse(Place);
    const xVal = parseInt(args.xCoord, 8);
    const yVal = parseInt(args.yCoord, 8);
    const fVal = String(args.facing);
    if (xVal <= 4 && yVal <= 4 && fVal !== null) {
      moveHistoryAPI.clearall();
      moveHistoryAPI.add(xVal, yVal, fVal);
      this.log("Success!");
    } else {
      this.log("Cannot place the robot outside of the grid!");
    }
  }
}
