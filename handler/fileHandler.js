const fs = require('fs');
const util = require('util');

//const writeStream = fs.createWriteStream('temp.txt', 'utf8');

// process.stdin.resume();

// process.stdin.on('data', (data)=>{
//   console.log(`Data received ${data}`);
// });

const readStream = fs.createReadStream(__dirname + '/sample.json', 'utf8');

// writeStream.on('error', (err)=>{
//     console.log(`Error occurred while writing into the file ${err}`);
// })


readStream.on('data', (chunk)=>{    
    process.send(chunk);
})

//readStream.pipe(writeStream);

