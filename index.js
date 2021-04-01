import express from "express";
const app = express();
const PORT = 4000;

const handleListening = () => {
    console.log(`listening started on port ${PORT}.`);
}

const handleHome = (req, res) => res.send("hello - from home");

const handleProfile = (req, res) => res.send("you are on my profile");//arrow function이라고 함.

const middleWareOfHome = (req, res, next) => {
    console.log("middleWare function operated.");
    next();
};

app.use(middleWareOfHome);/** */
//middleWares as you want...(get의 위쪽에 있어야 middleware로서 작동함.)

app.get("/", handleHome);
//app.get("/", middleWareOfHome, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
//diy
/*const express = require('express');
const app = express();
const PORT = 4000;

function sendDefaultScreenData(req, res) {
    res.send("this is DefaultScreen.");
    console.log("response finished.");
}

function whenServerRequested() {
    console.log("now listening...");
}

app.get("/", sendDefaultScreenData);

app.listen(PORT, whenServerRequested);
*/