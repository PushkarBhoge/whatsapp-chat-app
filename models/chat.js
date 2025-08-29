const mongoose = require("mongoose");

const chatScheme = mongoose.Schema({
    form: {type: String, required: true},
    to: {type: String},
    message: {type: String, maxLength: 50},
    createdAt: {type: Date, required: true},
});

const Chat = mongoose.model("Chat", chatScheme);

module.exports = Chat;
