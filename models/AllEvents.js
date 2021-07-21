const mongoose = require('mongoose');

const AllEventsSchema = mongoose.Schema({
    FunctionName: {
        type: String,
        required: true
    },
    FunctionAddress: {
        type: String,
        required: true
    },
    Status: {
        type: Number,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('AllEvents', AllEventsSchema);