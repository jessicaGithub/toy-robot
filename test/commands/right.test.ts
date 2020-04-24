import { expect, test } from "@oclif/test";

describe("turn right before placing the robot", () => {
  test
    .stdout()
    .command(["hello"])
    .it("runs hello", (ctx) => {
      expect(ctx.stdout).to.include("");
    });

  test
    .stdout()
    .command(["right"])
    .it("runs right", (ctx) => {
      expect(ctx.stdout).to.include("Please place the toy robot first");
    });
});

describe("turn right after placing the robot", () => {
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
    .command(["right"])
    .it("runs right", (ctx) => {
      expect(ctx.stdout).to.include("I am now at 0 0 facing EAST");
    });
});
