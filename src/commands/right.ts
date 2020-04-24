import { Command } from "@oclif/command";
import moveHistoryAPI from "../api/move-history-api";

export default class Right extends Command {
  static description = "Turn 90 degrees to the right";

  async run() {
    const moveHistory = moveHistoryAPI.list();
    let currentPosition;
    if (moveHistory.length > 0) {
      currentPosition = moveHistory[moveHistory.length - 1];
      const xCurrent = currentPosition.x;
      const yCurrent = currentPosition.y;
      let fCurrent = currentPosition.face;
      switch (fCurrent) {
        case "NORTH": {
          fCurrent = "EAST";
          break;
        }
        case "SOUTH": {
          fCurrent = "WEST";
          break;
        }
        case "EAST": {
          fCurrent = "SOUTH";
          break;
        }
        case "WEST": {
          fCurrent = "NORTH";
          break;
        }
        default: {
          break;
        }
      }
      moveHistoryAPI.add(xCurrent, yCurrent, fCurrent);
      this.log(`I am now at ${xCurrent} ${yCurrent} facing ${fCurrent}`);
    } else {
      this.log("Please place the toy robot first");
    }
  }
}
