//IMPORT MODULE
const fs = require('fs')
function readFileSync(){
    const content = fs.readFileSync('./src/greeting.txt');
    console.log('CONTENT',content.toString());
  }
  
  function readFileASync(){
      fs.readFile('./src/greeting.txt', (err, data)=>{
      if(err) throw err;
      console.log('NEWCONTENT',data.toString());
    });
  }
  
  function readFileName(){
    console.log('FILENAME:', __filename);
  }
  
  function readDirectoryName(){
    console.log('DIRECTORY:', __dirname);
  }

  module.exports = {
    readDirectoryName,
    readFileASync,
    readFileName,
    readFileSync
  }