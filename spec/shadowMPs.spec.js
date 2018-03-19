const { shadowMPs } = require("../katas/shadowMPs");
const expect = require("chai").expect;
const MPDATA = require("../MPs.json")
const fs = require('fs');

describe("shadowMPs", () => {
  let mpData;
  before(function (done) {
    fs.readFile('./MPs.json', 'utf8', (err, data) => {
      mpData = JSON.parse(data);
      done()
    })
  });

  it("describe test", () => {
    const input = [];
    const actual = shadowMPs;
    const expected = []
    expect(actual).to.eql(expected);
  });
});