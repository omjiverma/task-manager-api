const express =  require('express')
const app = express();
const tasks = require('./routes/task')
// Routes
app.get('/',(req, res)=>{
    res.send('task manager')
})

app.use('/api/v1/tasks',tasks)

const PORT = 3000

app.listen(PORT, console.log(`Server started at port ${PORT}`))