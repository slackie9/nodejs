const express = require("express");

const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./utils/contact");
const app = express();
const port = 3000;

// gunakan ejs

app.set("view engine", "ejs");

// Third-party Middleware

app.use(expressLayouts);

// built-in middleware

app.use(express.static("public"));

app.get("/", (req, res) => {
    // res.sendFile("./index.html", { root: __dirname });
    const mahasiswa = [
        {
            nama: "Slackie",
            email: "slackie@mail.com",
        },
        {
            nama: "Nobita",
            email: "nobita@mail.com",
        },
        {
            nama: "shizuka",
            email: "shizuka@mail.com",
        },
    ];
    res.render("index", {
        nama: "Slackie",
        title: "Halaman Home",
        mahasiswa,
        layout: "layouts/main-layout",
        title: "Halaman Index",
    });
});
app.get("/about", (req, res) => {
    res.render("about", {
        layout: "layouts/main-layout",
        title: "Halaman About",
    });
});
app.get("/contact", (req, res) => {
    const contacts = loadContact();
    res.render("contact", {
        layout: "layouts/main-layout",
        title: "Halaman Contact",
        contacts,
    });
});
app.get("/contact/:nama", (req, res) => {
    const contact = findContact(req.params.nama);
    res.render("detail", {
        layout: "layouts/main-layout",
        title: "Halaman Detail",
        contact,
    });
});

app.use("/", (req, res) => {
    res.status(404);
    res.send("<h1>404</h1>");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
