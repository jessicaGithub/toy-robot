import { expect, test } from "@oclif/test";

describe("move before placing the robot", () => {
  test
    .stdout()
    .command(["hello"])
    .it("runs hello", (ctx) => {
      expect(ctx.stdout).to.include("");
    });

  test
    .stdout()
    .command(["move"])
    .it("runs move", (ctx) => {
      expect(ctx.stdout).to.include("Please place the toy robot first");
    });
});

describe("valid move after placing the robot", () => {
  test
    .stdout()
    .command(["hello"])
    .it("runs hello", (ctx) => {
      expect(ctx.stdout).to.include("");
    });

  test
    .stdout()
    .command(["place", "0", "0", "NORTH"])
    .it("runs place", (ctx) => {
      expect(ctx.stdout).to.include("I am now at 0 0 facing NORTH");
    });

  test
    .stdout()
    .command(["move"])
    .it("runs move", (ctx) => {
      expect(ctx.stdout).to.include("I am now at 0 1 facing NORTH");
    });
});

describe("invalid move after placing the robot", () => {
  test
    .stdout()
    .command(["hello"])
    .it("runs hello", (ctx) => {
      expect(ctx.stdout).to.include("");
    });
  test
    .stdout()
    .command(["place", "0", "4", "NORTH"])
    .it("runs robot place", (ctx) => {
      expect(ctx.stdout).to.include("I am now at 0 4 facing NORTH");
    });

  test
    .stdout()
    .command(["move"])
    .it("runs move", (ctx) => {
      expect(ctx.stdout).to.include(
        "I'm about to fall off the edge! I won't do it!"
      );
    });
});
