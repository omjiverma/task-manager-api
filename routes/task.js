const express =  require('express');
const router = express.Router();
const {getAllTasks, createTasks, getTask, updateTasks, deleteTask} = require('../controller/tasks.js');

router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTask)

module.exports = router