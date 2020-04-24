import { Command } from "@oclif/command";
import moveHistoryAPI from "../api/move-history-api";

export default class Hello extends Command {
  static description = "Used as a reset command";

  async run() {
    moveHistoryAPI.clearall();
  }
}
