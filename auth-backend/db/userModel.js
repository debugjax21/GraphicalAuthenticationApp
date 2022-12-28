const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username Exist"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
})

// Create a user table/collection if there isn't one already.
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);