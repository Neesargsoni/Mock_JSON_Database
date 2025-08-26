const fs = require('fs');
const filePath = './database.json';
const { readData, writeData } = require('../utils/file.js');

async function createUser(req, res) {
    try {
        const data = await readData(filePath); // reads the json data from file
        // logic to increment id
        const lastUser = data.users[data.users.length - 1];
        // what happens if there are no users?
        const nextId = lastUser ? lastUser.id + 1 : 0;

        //create a new object
        const newUser = {
            id:nextId,
            username:req.body.username,
            first_name:req.body.first_name,
            email:req.body.email,
        }

        // push the data to memory object
        data.users.push(newUser);

        // write the updated data back to the file
        await writeData(data);

        res.status(200).send("User created successfully");

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {createUser}