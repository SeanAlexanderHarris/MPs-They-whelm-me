const lodash = require('lodash');

function treasuryMPs(arr, str) {
  return arr.reduce((acc, mpObj) => {
    if (mpObj.office !== undefined) {
      const worksInTreasury = mpObj.office.reduce((acc, job) => {
        job.dept.match(/treasury/i) ? acc = true : 0;
        return acc;
      }, false)
      if (worksInTreasury === true) {
        acc.push(mpObj.name);
      }
    }
    return acc;
  }, []);
};

// ** With lodash **
// function treasuryMPs(arr, str) {
//   return arr.reduce((acc, mpObj) => {
//     let worksInTreasury = [];
//     if (mpObj.office !== undefined) {
//       worksInTreasury = mpObj.office.reduce((acc, job) => {
//         job.dept.match(/treasury/i) ? acc.push(mpObj.name) : 0;
//         return acc;
//       }, [])
//     }
//     return lodash.uniq([...acc, ...worksInTreasury]);
//   }, []);
// };

// ** lodash use example **
// const testArr = [1, 2, 3, 4, 5];
// console.log(lodash.shuffle(testArr));

module.exports = { treasuryMPs }