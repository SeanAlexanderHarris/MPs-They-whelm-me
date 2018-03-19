const ACCESS_KEY = 'CmDKPrEUNyFYC5KCx4Cr4DDE';
const fs = require('fs');
const axios = require('axios');

axios.get(`https://www.theyworkforyou.com/api/getMPs?key=${ACCESS_KEY}`)
  .then(res => {
    console.log(res)
    fs.appendFile('MPs.json', JSON.stringify(res.data, null, 2), (err) => {
      if (err) throw err;
    });
  }).catch(err => {
    console.log(err);
  });