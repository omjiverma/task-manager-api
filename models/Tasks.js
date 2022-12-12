const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {type:String,
    required:[true, "name must be provided"],
    trim: true,
    maxlength:[20, "name cannot be more than 20"]},
    
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)