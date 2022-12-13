const express =  require('express')
const app = express();
const connectDb = require('./db/connect.js')
const tasks = require('./routes/task')
require('dotenv').config()
// middleware
app.use(express.static('./public'))
app.use(express.json())
// Routes
app.use('/api/v1/tasks',tasks)

const PORT = 3000

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(PORT, console.log(`Server started at port ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()
