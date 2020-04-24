import { expect, test } from "@oclif/test";

describe("try to invoke report before placing the robot", () => {
  test
    .stdout()
    .command(["hello"])
    .it("runs hello", (ctx) => {
      expect(ctx.stdout).to.include("");
    });

  test
    .stdout()
    .command(["report"])
    .it("runs report", (ctx) => {
      expect(ctx.stdout).to.include("Please place the toy robot first");
    });
});

describe("try to invoke report after placing the robot", () => {
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
    .command(["report"])
    .it("runs report", (ctx) => {
      expect(ctx.stdout).to.include("I am now at 0 0 facing NORTH");
    });
});
