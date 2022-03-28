const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found')

const tasks = require('./routes/tasks');
require('dotenv').config();

// middleware
app.use(express.static('./public'));
app.use(express.json())

// Routes
app.use('/api/v1/tasks', tasks)
app.use(notFound);

// app.get('/api/v1/tasks') - get all tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks/:id') - get single task
// app.patch('/api/v1/tasks/:id') - update single task
// app.delete('/api/v1/tasks/:id) - delete task

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log('Listening....'));
    } catch (error) {
        console.log(error)
    }
}

start();

// app.listen(port, () => console.log('Listening....'));