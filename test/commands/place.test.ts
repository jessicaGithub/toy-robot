import { expect, test } from "@oclif/test";

describe("place", () => {
  test
    .stdout()
    .command(["hello"])
    .it("runs hello", (ctx) => {
      expect(ctx.stdout).to.include("");
    });

  test
    .stdout()
    .command(["place", "0", "0", "NORTH"])
    .it("runs toy-robot place", (ctx) => {
      expect(ctx.stdout).to.include("I am now at 0 0 facing NORTH");
    });

  test
    .stdout()
    .command(["place", "0", "4", "NORTH"])
    .it("runs robot place", (ctx) => {
      expect(ctx.stdout).to.include("I am now at 0 4 facing NORTH");
    });
});
