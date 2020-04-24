import { Command } from "@oclif/command";
import moveHistoryAPI from "../api/move-history-api";

export default class Report extends Command {
  static description = "Report where the robot is currently located";

  async run() {
    const moveHistory = moveHistoryAPI.list();
    let currentPosition;
    if (moveHistory.length > 0) {
      currentPosition = moveHistory[moveHistory.length - 1];
      const xCurrent = currentPosition.x;
      const yCurrent = currentPosition.y;
      const fCurrent = currentPosition.face;
      this.log(`I am now at ${xCurrent} ${yCurrent} facing ${fCurrent}`);
    } else {
      this.log("Please place the toy robot first");
    }
  }
}
