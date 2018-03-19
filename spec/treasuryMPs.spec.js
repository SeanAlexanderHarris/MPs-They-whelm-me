const { treasuryMPs } = require("../katas/treasuryMPs");
const expect = require("chai").expect;
const MPDATA = require("../MPs.json")
const fs = require('fs');

describe("treasuryMPs", () => {
  let mpData;
  before(function (done) {
    fs.readFile('./MPs.json', 'utf8', (err, data) => {
      mpData = JSON.parse(data);
      done()
    })
  });

  it("returns an empty array when passed an empty array", () => {
    // mpData is the big MP array
    const input = [];
    const actual = treasuryMPs(input, 'treasury');
    const expected = []
    expect(actual).to.eql(expected);
  });

  it("returns an array of 1 name when passed one female treasury MP object", () => {
    const input = [mpData[6]]; // Labour MP Catherine McKinnell
    const actual = treasuryMPs(input, 'treasury');
    const expected = ["Catherine McKinnell"];
    expect(actual).to.eql(expected);
  });

  it("returns an empty array when passed a none treasury MP object", () => {
    const input = [mpData[0]];
    const actual = treasuryMPs(input, 'treasury');
    const expected = [];
    expect(actual).to.eql(expected);
  });

  it("returns an array of all female MPs who have worked in the treasury", () => {
    const input = mpData
    const actual = treasuryMPs(input, 'treasury');
    const expected = [
      "Catherine McKinnell"
      , "Charlie Elphicke"
      , "Stewart Hosie"
      , "Alison McGovern"
      , "Stephen Hammond"
      , "Simon Clarke"
      , "John Mann"
      , "Rushanara Ali"
      , "Alister Jack"
      , "Wes Streeting"
      , "Nicky Morgan"
      , "Kit Malthouse"
      , "Catherine McKinnell"
      , "Charlie Elphicke"
      , "Stewart Hosie"
      , "Alison McGovern"
      , "Stephen Hammond"
      , "Simon Clarke"
      , "John Mann"
      , "Rushanara Ali"
      , "Alister Jack"
      , "Wes Streeting"
      , "Nicky Morgan"
      , "Kit Malthouse"
      , "Catherine McKinnell"
      , "Charlie Elphicke"
      , "Stewart Hosie"
      , "Alison McGovern"
      , "Stephen Hammond"
      , "Simon Clarke"
      , "John Mann"
      , "Rushanara Ali"
      , "Alister Jack"
      , "Wes Streeting"
      , "Nicky Morgan"
      , "Kit Malthouse"
    ];
    expect(actual).to.eql(expected);
  });

});

describe("olderTories", () => {
  let mpData;
  before(function (done) {
    fs.readFile('./MPs.json', 'utf8', (err, data) => {
      mpData = JSON.parse(data);
      done()
    })
  });

  it("describe test", () => {
    const input = [];
    const actual = olderTories(input);
    const expected = []
    expect(actual).to.eql(expected);
  });

  it("describe test", () => {
    const input = [];
    const actual = olderTories(input);
    const expected = []
    expect(actual).to.eql(expected);
  });

  it("describe test", () => {
    const input = [];
    const actual = olderTories(input);
    const expected = []
    expect(actual).to.eql(expected);
  });

  it("describe test", () => {
    const input = [];
    const actual = olderTories(input);
    const expected = []
    expect(actual).to.eql(expected);
  });

});