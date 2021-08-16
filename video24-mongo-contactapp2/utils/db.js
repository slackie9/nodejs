const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/students", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// manambah 1 data

// const contact1 = new Contact({
//     nama: "nobita",
//     noHp: "081288877766",
//     email: "nobita@mail.com",
// });

// // simpan ke collection
// contact1.save().then((contact) => console.log(contact));
