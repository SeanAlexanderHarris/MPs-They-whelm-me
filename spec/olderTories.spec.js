const { olderTories } = require("../katas/olderTories");
const expect = require("chai").expect;
const MPDATA = require("../MPs.json")
const fs = require('fs');

describe.only("olderTories", () => {
  let mpData;
  before(function (done) {
    fs.readFile('./MPs.json', 'utf8', (err, data) => {
      mpData = JSON.parse(data);
      done()
    })
  });

  it("returns an empty array when passed an empty array", () => {
    const input = [];
    const actual = olderTories(input);
    const expected = []
    expect(actual).to.eql(expected);
  });

  it("returns an array of one name when passed an array of one valid MP", () => {
    const input = [mpData[23]];
    const actual = olderTories(input);
    const expected = ["Robert Buckland"]
    expect(actual).to.eql(expected);
  });

  it("returns an empty array when passed an array of one invalid name", () => {
    const input = [mpData[7]];
    const actual = olderTories(input);
    const expected = []
    expect(actual).to.eql(expected);
  });

  it("returns an array of one name when passed an array of one valid name and one invalid name", () => {
    const input = [mpData[22], mpData[23]];
    const actual = olderTories(input);
    const expected = ["Robert Buckland"]
    expect(actual).to.eql(expected);
  });

  it("returns an array of the correct names when passed the entire data set", () => {
    const input = mpData;
    const actual = olderTories(input);
    const expected = [
      'Robert Buckland',
      'Alan Campbell',
      'Jonathan Edwards',
      'Jonathan Edwards',
      'Jonathan Edwards',
      'Hywel Williams',
      'Eleanor Laing',
      'Lindsay Hoyle',
      'Mark Tami',
      'Jeremy Wright',
      'Nigel Dodds',
      'Nick Gibb',
      'Gareth Thomas',
      'Graham Brady',
      'John Bercow',
      'Steve Pound',
      'Robert Buckland',
      'Alan Campbell',
      'Jonathan Edwards',
      'Jonathan Edwards',
      'Jonathan Edwards',
      'Hywel Williams',
      'Eleanor Laing',
      'Lindsay Hoyle',
      'Mark Tami',
      'Jeremy Wright',
      'Nigel Dodds',
      'Nick Gibb',
      'Gareth Thomas',
      'Graham Brady',
      'John Bercow',
      'Steve Pound',
      'Robert Buckland',
      'Alan Campbell',
      'Jonathan Edwards',
      'Jonathan Edwards',
      'Jonathan Edwards',
      'Hywel Williams',
      'Eleanor Laing',
      'Lindsay Hoyle',
      'Mark Tami',
      'Jeremy Wright',
      'Nigel Dodds',
      'Nick Gibb',
      'Gareth Thomas',
      'Graham Brady',
      'John Bercow',
      'Steve Pound'
    ]
    expect(actual).to.eql(expected);
  });

});