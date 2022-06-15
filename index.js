const { parse } = require('csv-parse')
const fs = require('fs')

const results = [];
fs.createReadStream('kepler_data.csv')
  .pipe(parse({
    comment: '#',
    columns: true,
  }))
  .on('data', (data) => {
    results.push(data)
  })
  .on('error', (e) => {
    console.error('ERROR', e);
  })
  .on('end', () => {
    console.log(results);
    console.log('DONE');
  })
