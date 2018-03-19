function olderTories(arr) {
  return arr.reduce((acc, mpObj) => {
    if (mpObj.office !== undefined) {
      mpObj.office.forEach(officeObj => {
        let dateSlice = parseInt(officeObj.from_date.slice(0, 5));
        dateSlice < 2015 ? acc.push(mpObj.name) : 0;
      })
    }
    return acc;
  }, []);
}

module.exports = { olderTories }