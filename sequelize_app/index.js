const express = require('express');
const app = express();
app.use(express.json());

const { sequelize } = require('./config/db');
const { orderRouter } = require('./route/orderRoutes');
const { userRouter } = require('./route/userRoutes');

app.use('/', userRouter);
app.use('/orders', orderRouter);

app.listen(8080, async () => {
    try {
        await sequelize.sync();
        console.log('Connected to DB')
    } catch (error) {
        console.log(error)
    }
    console.log('Server is running')
})