const express = require("express");
const path = require("path");
const app = express();
const http = require("http").Server(app);
const csv = require('csv-parser')
const fs = require('fs')

const publicPath = path.resolve(__dirname, "../public/");

app.use(express.static(publicPath));

app.get("/cities", (req, res, next) => {
    const results = [];
    fs.createReadStream('./assets/cities.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        });
});

app.get("/*", function (req, res) {
    res.sendFile("index.html", { root: publicPath });
});

http.listen(3000, function () {
    console.log("Bendi listening on *:3000");
});
