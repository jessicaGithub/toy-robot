import { Command } from "@oclif/command";
import * as inquirer from "inquirer";
import moveHistoryAPI from "../api/move-history-api";

export default class Place extends Command {
  static description =
    "This command is used for placing the toy robot on a 5x5 grid.";

  static args = [
    {
      name: "xCoord",
      required: false,
      options: ["0", "1", "2", "3", "4"],
      description: "please enter the x coordinate!",
    },
    {
      name: "yCoord",
      required: false,
      options: ["0", "1", "2", "3", "4"],
      description: "please enter the y coordinate!",
    },
    {
      name: "facing",
      required: false,
      options: ["NORTH", "EAST", "SOUTH", "WEST"],
      description: "please define where the robot should be facing!",
    },
  ];

  async run() {
    // accepts arguments only for testing purposes, as a workaround for inquirer testing
    const { args } = this.parse(Place);
    const xVal = parseInt(args.xCoord, 8);
    const yVal = parseInt(args.yCoord, 8);
    const fVal = String(args.facing);
    if (xVal <= 4 && yVal <= 4 && fVal !== null) {
      moveHistoryAPI.clearall();
      moveHistoryAPI.add(xVal, yVal, fVal);
      this.log(`I am now at ${xVal} ${yVal} facing ${fVal}`);
    } else {
      let xVal;
      let yVal;
      let fVal;
      inquirer
        .prompt([
          {
            name: "xVal",
            message: "X coordinate:",
            type: "list",
            choices: [0, 1, 2, 3, 4],
          },
          {
            name: "yVal",
            message: "Y coordinate:",
            type: "list",
            choices: [0, 1, 2, 3, 4],
          },
          {
            name: "fVal",
            message: "Facing:",
            type: "list",
            choices: ["NORTH", "EAST", "SOUTH", "WEST"],
          },
        ])
        .then((answers) => {
          xVal = answers.xVal;
          yVal = answers.yVal;
          fVal = answers.fVal;

          moveHistoryAPI.clearall();
          moveHistoryAPI.add(xVal, yVal, fVal);
          this.log(`I am now at ${xVal} ${yVal} facing ${fVal}`);
        })
        .catch(() => {
          this.log("Cannot place the robot outside of the grid!");
        });
    }
  }
}
