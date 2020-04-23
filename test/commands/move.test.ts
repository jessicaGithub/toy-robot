import { expect, test } from "@oclif/test";

describe("move before placing the robot", () => {
  test
    .stdout()
    .command(["hello"])
    .it("runs toy-robot hello", (ctx) => {
      expect(ctx.stdout).to.contain("Hello to you too!");
    });

  test
    .stdout()
    .command(["move"])
    .it("runs toy-robot move", (ctx) => {
      expect(ctx.stdout).to.include("Please place the toy robot first");
    });
});

describe("valid move after placing the robot", () => {
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
    .command(["move"])
    .it("runs toy-robot move", (ctx) => {
      expect(ctx.stdout).to.include("I am now at 4 3 facing SOUTH");
    });
});

describe("invalid move after placing the robot", () => {
  test
    .stdout()
    .command(["hello"])
    .it("runs toy-robot hello", (ctx) => {
      expect(ctx.stdout).to.contain("Hello to you too!");
    });

  test
    .stdout()
    .command(["place", "4", "4", "NORTH"])
    .it("runs toy-robot place 4 4 SOUTH", (ctx) => {
      expect(ctx.stdout).to.include("Success!");
    });

  test
    .stdout()
    .command(["move"])
    .it("runs toy-robot move", (ctx) => {
      expect(ctx.stdout).to.include(
        "I'm about to fall off the edge! I won't do it!"
      );
    });
});
