// const nama = "Slackie";
// const cetakNama = (nama) => `Hi, Nama saya ${nama}`;

// console.log(cetakNama(nama));
// const fs = require("fs"); // coremodule
// const cetakNama = require("./coba"); // import local module
// const moment = require("moment"); // third party module / npm module /node_modules
// console.log("Hallo Slackie")

// const cetakNama = require('./coba');
// const PI = require('./coba')

const coba = require("./coba");

console.log(coba.cetakNama("Slackie"), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());
