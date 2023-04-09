const express = require('express');
const { Users } = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRouter = express.Router()

//Read
userRouter.get('/', async (req, res) => {
    let data = await Users.findAll();
    res.send(data);
});

// SignUp
userRouter.post('/signup', async (req, res) => {
    let { email, password } = req.body;

    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                console.log(err);
            } else {
                await Users.create({ email, password: hash });
                res.send("User Created");
            }
        });
    } catch (error) {
        console.log(error);
    }
});

// Login
userRouter.post('/login', async (req, res) => {
    let { email, password } = req.body;
    // console.log(req.body);

    let data = await Users.findOne({ email });
    bcrypt.compare(password, data.password).then((result) => {
        if (result) {
            var token = jwt.sign({ email: email }, "anand");
            res.send("Login Successfully");
        } else {
            res.send('Wrong Password');
        }
    });
});


module.exports = { userRouter };
