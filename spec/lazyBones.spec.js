const { lazyBones } = require("../katas/lazyBones");
const expect = require("chai").expect;
const MPDATA = require("../MPs.json")
const fs = require('fs');

describe("lazyBones", () => {
  let mpData;
  before(function (done) {
    fs.readFile('./MPs.json', 'utf8', (err, data) => {
      mpData = JSON.parse(data);
      done()
    })
  });

  it("returns an empty array when passed an empty array", () => {
    const input = [];
    const actual = lazyBones(input);
    const expected = []
    expect(actual).to.eql(expected);
  });

  it("returns an array of one name when passed an array of one valid MP", () => {
    const input = [mpData[4]];
    const actual = lazyBones(input);
    const expected = ["Justin Tomlinson so lazy!"]
    expect(actual).to.eql(expected);
  });

  it("returns an empty array when passed an array of one invalid name", () => {
    const input = [mpData[0]];
    const actual = lazyBones(input);
    const expected = []
    expect(actual).to.eql(expected);
  });

  it("returns an array of one name when passed an array of one valid name and one invalid name", () => {
    const input = [mpData[10]];
    const actual = lazyBones(input);
    const expected = ["John Baron so lazy!"]
    expect(actual).to.eql(expected);
  });

  it("returns an array of the correct names when passed the entire data set", () => {
    const input = mpData;
    const actual = lazyBones(input);
    const expected = []
    console.log(actual);
    expect(actual).to.eql(expected);
  });

});