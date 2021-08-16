const mongoose = require("mongoose");

const Contact = mongoose.model("Contact", {
    nama: {
        type: String,
        require: true,
    },
    noHp: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
});

module.exports = { Contact };
