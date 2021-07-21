const mongoose = require('mongoose');

const AllAmountsSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    Credit: {
        type: Number,
        required: true
    },
    Debit: {
        type: Number,
        required: true
    },
    FunctionName: {
        type: String,
        required: true
    },
    AmountType: {
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
module.exports = mongoose.model('AllAmounts', AllAmountsSchema);