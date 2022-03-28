const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters'],
    }, 
    completed: {
        type: Boolean,
        default: false,
    },
});

// .model function looks for two arguments: 
// first: Task (name we want to model)
// second: Schema name (which schema you want to model)
module.exports = mongoose.model('Task', TaskSchema);
