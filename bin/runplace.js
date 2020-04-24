#! /usr/bin/env node
var shell = require("shelljs");
var child_process = require("child_process");

shell.exec("./bin/run hello");
child_process.execFileSync("./bin/run", ["place"], { stdio: "inherit" });
