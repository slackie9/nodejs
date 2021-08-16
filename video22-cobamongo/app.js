const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "students";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if (error) {
        return console.log("Koneksi gagal");
    }

    // pilih database

    const db = client.db(dbName);

    //menambahkan 1 data ke collection mahasiswa
    // db.collection("mahasiswa").insertOne(
    //     {
    //         nama: "Nobita nobi",
    //         email: "nobitanobi@mail.com",
    //     },
    //     (error, result) => {
    //         if (error) {
    //             return console.log("gagal menambahkan data");
    //         }
    //         console.log(result);
    //     }
    // );

    //Menambahkan lebih dari 1 data

    // db.collection("mahasiswa").insertMany(
    //     [
    //         {
    //             nama: "nobita",
    //             email: "nobita@nobita.com",
    //         },
    //         {
    //             nama: "Shizuka Minamoto",
    //             email: "shizuka@shizukaminamoto.com",
    //         },
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log("Gagal Menambahkan data");
    //         }
    //         console.log(result);
    //     }
    // );

    // // Menampilkan semua data yang ada di collection atau table mahasisw
    // console.log(
    //     db
    //         .collection("mahasiswa")
    //         .find()
    //         .toArray((error, result) => {
    //             console.log(result);
    //         })
    // );
    // Menampilkan semua data yang ada di collection atau table mahasiswa

    // console.log(
    //     db
    //         .collection("mahasiswa")
    //         .find({ _id: ObjectId("6114c402937255fa6012b24e") })
    //         .toArray((error, result) => {
    //             console.log(result);
    //         })
    // );

    // Mengubah data berdsasarkan id
    // const updatePromise = db.collection("mahasiswa").updateOne(
    //     {
    //         _id: ObjectId("6113a85a1e96e812c8856dc2"),
    //     },
    //     {
    //         $set: {
    //             email: "shizuka@minamoto.com",
    //         },
    //     }
    // );
    // updatePromise
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    // db.collection("mahasiswa").updateMany(
    //     {
    //         nama: "nobita",
    //     },
    //     {
    //         $set: {
    //             nama: "Nobita nobi",
    //         },
    //     }
    // );

    // menhapus 1 data
    // db.collection("mahasiswa")
    //     .deleteOne({
    //         _id: ObjectId("6113a85a1e96e812c8856dc2"),
    //     })
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    //menghapus lebih dari 1 data
    db.collection("mahasiswa")
        .deleteMany({
            nama: "slackie",
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
});
