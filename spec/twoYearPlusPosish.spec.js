const { twoYearPlusPosish } = require("../katas/twoYearPlusPosish");
const expect = require("chai").expect;
const MPDATA = require("../MPs.json")
const fs = require('fs');

describe("twoYearPlusPosish", () => {
  let mpData;
  before(function (done) {
    fs.readFile('./MPs.json', 'utf8', (err, data) => {
      mpData = JSON.parse(data);
      done()
    })
  });

  it("describe test", () => {
    const input = [];
    const actual = twoYearPlusPosish;
    const expected = []
    expect(actual).to.eql(expected);
  });
});