const express = require('express');
//const fs = require('fs');

const server = express();

const port = 5000;

server
  .use(express.static('./'))
  // .get('/', (req, res) => {
  //   fs.readFile('./index.html', (err, html)=>{
  //     if(err){
  //       throw new Error(err);
  //     }
  //     res.write(html);
  //     res.end();
  //   })

  // })
  .listen(port, () => { console.log('Run server'); });