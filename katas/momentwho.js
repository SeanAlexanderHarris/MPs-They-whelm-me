function momentWho(arr) {
  return arr.reduce((acc, mpObj) => {
    if (/labour/i.test(mpObj.party)) {
      /* regEx match for all charactes from last white space to end */
      let lastName = mpObj.name.match(/\s\D+$/i);
      console.log(lastName);
      acc.push(`Comrade ${lastName}`)
    }
    return acc;
  }, [])
}

module.exports = { momentWho }