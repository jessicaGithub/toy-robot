import { expect, test } from "@oclif/test";

describe("place", () => {
  test
    .stdout()
    .command(["place", "1", "1", "NORTH"])
    .it("runs toy-robot place 1 1 NORTH", (ctx) => {
      expect(ctx.stdout).to.include("Success!");
    });

  test
    .stdout()
    .command(["place", "4", "4", "SOUTH"])
    .it("runs toy-robot place 4 4 SOUTH", (ctx) => {
      expect(ctx.stdout).to.include("Success!");
    });
});
