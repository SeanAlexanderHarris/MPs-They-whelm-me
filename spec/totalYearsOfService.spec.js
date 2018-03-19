const { totalYearsOfService } = require("../katas/totalYearsOfService");
const expect = require("chai").expect;
const MPDATA = require("../MPs.json")
const fs = require('fs');

describe("totalYearsOfService", () => {
  let mpData;
  before(function (done) {
    fs.readFile('./MPs.json', 'utf8', (err, data) => {
      mpData = JSON.parse(data);
      done()
    })
  });

  it("describe test", () => {
    const input = [];
    const actual = totalYearsOfService;
    const expected = []
    expect(actual).to.eql(expected);
  });
});