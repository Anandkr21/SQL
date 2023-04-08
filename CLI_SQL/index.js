//install : npm i express nodemon sequelize mysql2 sequelize-cli
// run once as : npx sequelize-cli init

const express = require('express');
const db = require('./models/index')
const { student, course } = require('./models/index')

const app = express();
app.use(express.json());

// Create
app.post("/create", async (req, res) => {
    const { name, email, age } = req.body;
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
            isError: true,
            error,
        })
    }
})


// create student
app.post("/create-student", async (req, res) => {
    try {
        const { name, age, email , courseID } = req.body;
        const data = await student.create({
            name,
            age,
            email,
            courseID,
        });

        res.status(200).json({
            isError: false,
            data,
        })
    } catch (error) {
        res.status(400).json({
            isError: true,
            error,
        })
    }
})


// create course
app.post("/create-course", async (req, res) => {
    const { name, level } = req.body;
    try {
        const data = await course.create({
            name,
            level,
        });

        res.status(200).json({
            isError: false,
            data,
        })
    } catch (error) {
        res.status(400).json({
            isError: true,
            error,
        })
    }
})

// Read
app.get('/student', async (req, res) => {
    try {
        const data = await student.findAll();
        res.status(200).json({
            isError: false,
            data,
        });
    } catch (error) {
        res.status(400).json({
            isError: true,
            error,
        })
    }
})


//Update
app.put('/update/:id', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const data = await student.upsert({
            id: req.params.id,
            name,
            email,
            age,
        })
        res.status(200).json({
            isError: false,
            data
        })
    } catch (error) {
        res.status(400).json({
            isError: true,
            error,
        })
    }
})

// Delete
app.delete('/delete/:id', async (req, res) => {
    try {

        const data = await student.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            isError: false,
            data,
        });
    } catch (error) {
        res.status(400).json({
            isError: false,
            error
        })
    }
})


db.sequelize.sync().then(() => {
    app.listen(8080, () => {
        console.log('server is running')
    })
})
