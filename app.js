import express from 'express';
const app = express();
require('dotenv').config();
import { connect } from 'require';
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;

connect(uri).then(
    async () => {
        console.log('connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Conneted to port:${PORT}`);
        });
    }
).
catch((err)=>{
  console.log(`Error:${error}`)})
