const yargs = require("yargs");
const yargsParser = require("yargs-parser");
const { simpanContact, listContact, detailContact, deleteContact } = require("./contacts");

yargs
    .command({
        command: "add",
        describe: "Menambahkan contact baru",
        builder: {
            nama: {
                describe: "Nama Lengkap",
                demandOption: true,
                type: "string",
            },

            email: {
                describe: "Email",
                demandOption: true,
                type: "string",
            },

            noHP: {
                describe: "Nomor Handphone",
                demandOption: true,
                type: "string",
            },
        },
        handler(argv) {
            simpanContact(argv.nama, argv.email, argv.noHP);
        },
    })
    .demandCommand();

//menampilkan daftar semua nama contact

yargs.command({
    command: "list",
    describe: "Menampilkan semua nama dan no hp",
    handler() {
        listContact();
    },
});

// menampilka detail sebuah contact

yargs.command({
    command: "detail",
    describe: "Menampilkan detail sebuah contact berdasarkan nama",
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        detailContact(argv.nama);
    },
});

// menghapus  sebuah contact berdasarkan nama

yargs.command({
    command: "delete",
    describe: "Menghapus sebuah contact berdasarkan nama",
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        deleteContact(argv.nama);
    },
});

yargs.parse();
