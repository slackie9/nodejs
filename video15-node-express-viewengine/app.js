const express = require("express");
// const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// gunakan ejs

app.set("view engine", "ejs");
app.use(expressLayouts);

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
    res.render("contact", {
        layout: "layouts/main-layout",
        title: "Halaman Contact",
    });
});

app.get("/product/:id", (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category} `);
});

app.use("/", (req, res) => {
    res.status(404);
    res.send("<h1>404</h1>");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
