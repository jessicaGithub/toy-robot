import { expect, test } from "@oclif/test";

describe("turn right before placing the robot", () => {
  test
    .stdout()
    .command(["hello"])
    .it("runs toy-robot hello", (ctx) => {
      expect(ctx.stdout).to.contain("Hello to you too!");
    });
});
