//core module
// file system

const fs = require("fs");

// menuliskan string ke file (syncronous)

// try {
//     fs.writeFileSync("data/test.txt", "Hello World secara synchrounus");
// } catch (e) {
//     console.log(e);
// }

// menuliskan string ke file asyncronous

// fs.writeFile("data/test.txt", "Hello world secara Asynchrounous", (e) => {
//     console.log(e);
// });

// membaca isi file syncrounus

// const data = fs.readFileSync("data/test.txt", "utf-8");

// console.log(data);

// membaca isi file asyncrounous

// const data = fs.readFile("data/test.txt", "utf-8", (err, data) => {
//     if (err) throw e;
//     console.log(data);
// });

// console.log(data);

// Readline

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukan nama anda : ", (nama) => {
    rl.question("Masukan no HP anda : ", (noHp) => {
        const contact = { nama, noHp };
        const file = fs.readFileSync("data/contacts.json", "utf-8");
        const contacts = JSON.parse(file);
        contacts.push(contact);
        fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
        console.log(`Terimakasih sudah memasukan data ${nama}`);
        rl.close();
    });
});
