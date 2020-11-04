const { momentWho } = require("../katas/momentWho");
const expect = require("chai").expect;
const MPDATA = require("../MPs.json")
const fs = require('fs');

describe.only("momentWho", () => {
  let mpData;
  before(function (done) {
    fs.readFile('./MPs.json', 'utf8', (err, data) => {
      mpData = JSON.parse(data);
      done()
    })
  });

  it("returns an empty array when passed an empty array", () => {
    const input = [];
    const actual = momentWho(input);
    const expected = []
    expect(actual).to.eql(expected);
  });

  it("returns an array of one correctly formatted name when passed an array of one valid name", () => {
    const input = [mpData[0]];
    const actual = momentWho(input);
    const expected = ["Comrade Phillipson"]
    expect(actual).to.eql(expected);
  });

  xit("returns an empty array when passed an array of one invalid name", () => {
    const input = [mpData[23]];
    const actual = momentWho(input);
    const expected = []
    expect(actual).to.eql(expected);
  });

  xit("returns an array of one correctly formatted name when passed an array of one valid and one invalid name", () => {
    const input = [mpData[1], mpData[4]];
    const actual = momentWho(input);
    const expected = ["Comrade Onwurah"]
    expect(actual).to.eql(expected);
  });

  xit("returns an array of correctly formatted names when passed the entire data set", () => {
    const input = mpData;
    const actual = momentWho(input);
    const expected = []
    console.log(actual);
    expect(actual).to.eql(expected);
  });

});