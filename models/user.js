const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    tel: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        requied: true,
    },
});

module.exports = mongoose.model("User", userSchema);