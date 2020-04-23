import { Command } from "@oclif/command";
import moveHistoryAPI from "../api/move-history-api";

export default class Hello extends Command {
  static description = "It is nice to say hello when you first meet a robot";

  async run() {
    moveHistoryAPI.clearall();
    this.log(`Robot says: Hello to you too! I'm ready to be placed now!`);
  }
}
