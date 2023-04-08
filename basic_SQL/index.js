// npm i express nodemon sequelize mysql2


// npm i express sequelize mysql2

const express = require('express');
const sequelize = require('sequelize');
require('dotenv').config;

const seq = new sequelize('admission', 'root', 'enterSQLpassword', {
    host: 'localhost',
    dialect: 'mysql', // postgress | mariaDB
})

const student = seq.define('student', {
    name: sequelize.STRING,
    email: sequelize.STRING,
    age: sequelize.INTEGER,
})


const app = express();
app.use(express.json())

// create
app.post("/create", async(req,res) =>{
    const { name, email, age} = req.body;
    try {
        const data = await student.create({
            name,
            email,
            age,
        });

        res.status(200).json({
            isError: false,
            data,
        })
    } catch (error) {
        res.status(400).json({
            isError : true,
            error,
        })
    }
})


// read
app.get('/student', async(req,res) =>{
    try {
        const data = await student.findAll();
        res.status(200).json({
            isError: true,
            data,
        })
    } catch (error) {
        res.status(400).json({
            isError:true,
            error,
        })
    }
})


seq.sync().then(() => {
    app.listen(3000, () =>{
        console.log('server is running');
    })
})
