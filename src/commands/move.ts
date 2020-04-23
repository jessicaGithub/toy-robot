import { Command, flags } from "@oclif/command";
import moveHistoryAPI from "../api/move-history-api";

export default class Move extends Command {
  static description = "Move toward the current direction it is facing";

  async run() {
    const moveHistory = moveHistoryAPI.list();
    let currentPosition;
    if (moveHistory.length > 0) {
      currentPosition = moveHistory[moveHistory.length - 1];
      let xCurrent = currentPosition.x;
      let yCurrent = currentPosition.y;
      let fCurrent = currentPosition.face;
      switch (fCurrent) {
        case "NORTH": {
          if (yCurrent != 4) {
            yCurrent++;
            moveHistoryAPI.add(xCurrent, yCurrent, fCurrent);
            this.log(`I am now at ${xCurrent} ${yCurrent} facing ${fCurrent}`);
          } else {
            this.log("I'm about to fall off the edge! I won't do it!");
          }
          break;
        }
        case "SOUTH": {
          if (yCurrent != 0) {
            yCurrent--;
            moveHistoryAPI.add(xCurrent, yCurrent, fCurrent);
            this.log(`I am now at ${xCurrent} ${yCurrent} facing ${fCurrent}`);
          } else {
            this.log("I'm about to fall off the edge! I won't do it!");
          }
          break;
        }
        case "EAST": {
          if (xCurrent != 0) {
            xCurrent--;
            moveHistoryAPI.add(xCurrent, yCurrent, fCurrent);
            this.log(`I am now at ${xCurrent} ${yCurrent} facing ${fCurrent}`);
          } else {
            this.log("I'm about to fall off the edge! I won't do it!");
          }
          break;
        }
        case "WEST": {
          if (xCurrent != 4) {
            xCurrent++;
            moveHistoryAPI.add(xCurrent, yCurrent, fCurrent);
            this.log(`I am now at ${xCurrent} ${yCurrent} facing ${fCurrent}`);
          } else {
            this.log("I'm about to fall off the edge! I won't do it!");
          }
          break;
        }
        default: {
          break;
        }
      }
    } else {
      this.log("Please place the toy robot first");
    }
  }
}
