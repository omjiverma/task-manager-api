const mongoose = require('mongoose')

const connectionString = "mongodb+srv://admin:9012430680@mern-projects.23zbita.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority"

const connectDB = (url) => {
    return mongoose.connect(connectionString).then(() => console.log('Connected to DB'))
}

module.exports = connectDB