const gulp = require("gulp");

function test(done) {
  console.log("hello gulp!");
  done();
}

exports.default = test;
