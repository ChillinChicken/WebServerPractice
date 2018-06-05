"use strict";
// Type nodemon in the dir to open server while making changes and things
const express = require("express");
const path = require("path");

//Init App
const app = express();

//Load View Engine
app.set("views", path.join(__dirname, "views")); //__dirname == current directory
app.set("view engine", "pug");

//Home Route
app.get("/", (req, res) => {
    let articles = [
        {
            id:1,
            title:"Article 1",
            author:"Brandon Burky",
            body:"This is article one!"
        },
        {
            id:2,
            title:"Article 2",
            author:"Alison Zimmerman",
            body:"This is article two!"
        },
        {
            id:3,
            title:"Article 3",
            author:"Casey Donahue",
            body:"This is article three!"
        },
    ]
    res.render("index", {
        title:"Articles",
        articles: articles
    });
});

//Add Route
app.get("/articles/add", (req, res) => {
    res.render("add_article", {
        title:"Add Article"
    });
});

//Start Server
app.listen(3000, () => {
    console.log("Server started on port 3000.");
});