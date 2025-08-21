const fs = require('fs').promises;
const filePath = './databse.json';

async function readData(){
  try{
    const data  = await fs.readData(filePath,"utf-8");
    return JSON.parse(data);
  }
  catch(error){
    console.error("Error reading file",error);

  }
}

async function writeData(){
  try{
    await fs.writeData(filePath,JSON.stringify(data,));
  }
  catch(error){
    console.error("Error reading file",error);

  }
}

module.exports ={
    readData,
    writeData
}