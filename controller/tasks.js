const getAllTasks = (req, res) =>{
    res.send('all items');
}

const createTasks = (req, res) =>{
    res.send('create a task');
}

const getTask = (req, res) =>{
    res.send('get signle task');
}

const updateTasks = (req, res) =>{
    res.send('update task');
}

const deleteTask = (req, res) =>{
    res.send('delete task');
}

module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTask
}