var express = require('express');
var router = express.Router();
//var actions = require('../actions/db');
//var stream = require('../common/fileHandler')
const { fork } = require('child_process');

/* GET home page. */
// router.use('/', function(req, res, next) {
//   res.setHeader('Content-Type', 'text/plain');
//   // res.write(actions.numberOfUSersInDB().toString());
//   // res.end();
//   next();
// });

// router.use('/', function(req, res, next) {
//   res.end('ok');
//   next();
// });

router.get('/incidents', (req, res)=>{

   const child = fork( [__dirname + '/fileHandler.js'],
    { stdio:'inherit'});

    child.send('start');

    res.writeHead(200, {'content-type':'text/json'});
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    child.on('message', (data)=>
    {
        return res.end(data);
    })

  //  child.stdin.write('Start');

  //  child.stdout.on('data', (data)=>{
  //    console.log(`Got d data ${data}`);
  //    res.end(data);
  //  })

  //  child.stderr.on('error', (msg)=> {
  //    console.log(err);
  //   res.write(`Error occurred = ${msg}`);
  // } )

    child.on('exit', (code)=>{
      res.end(`EOF reached`);
    })

})

module.exports = router