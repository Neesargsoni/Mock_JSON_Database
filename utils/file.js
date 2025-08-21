const fs = require('fs').promises;
const filePath = './database.json';

async function readData(){
  try{
    const data  = await fs.readFile(filePath,"utf-8");
    return JSON.parse(data);
  }
  catch(error){
    console.error("Error reading file",error);

  }
}

async function writeData(){
  try{
    await fs.writeFile(filePath,JSON.stringify(data,));
  }
  catch(error){
    console.error("Error reading file",error);

  }
}

module.exports ={
    readData,
    writeData
}