const { debate } = require("../katas/debate");
const expect = require("chai").expect;
const MPDATA = require("../MPs.json")
const fs = require('fs');

describe("debate", () => {
  let mpData;
  before(function (done) {
    fs.readFile('./MPs.json', 'utf8', (err, data) => {
      mpData = JSON.parse(data);
      done()
    })
  });

  it("describe test", () => {
    const input = [];
    const actual = debate;
    const expected = []
    expect(actual).to.eql(expected);
  });
});