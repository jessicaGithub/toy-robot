import { expect, test } from "@oclif/test";

describe("turn left before placing the robot", () => {
  test
    .stdout()
    .command(["hello"])
    .it("runs toy-robot hello", (ctx) => {
      expect(ctx.stdout).to.contain("Hello to you too!");
    });

  test
    .stdout()
    .command(["left"])
    .it("runs toy-robot left", (ctx) => {
      expect(ctx.stdout).to.include("Please place the toy robot first");
    });
});

describe("turn left after placing the robot", () => {
  test
    .stdout()
    .command(["hello"])
    .it("runs toy-robot hello", (ctx) => {
      expect(ctx.stdout).to.contain("Hello to you too!");
    });

  test
    .stdout()
    .command(["place", "4", "4", "SOUTH"])
    .it("runs toy-robot place 4 4 SOUTH", (ctx) => {
      expect(ctx.stdout).to.include("Success!");
    });

  test
    .stdout()
    .command(["left"])
    .it("runs toy-robot left", (ctx) => {
      expect(ctx.stdout).to.include("I am now at 4 4 facing EAST");
    });
});
