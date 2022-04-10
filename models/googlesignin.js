const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    // passord: {
    //     type: String
    // },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("googleUsers", userSchema)