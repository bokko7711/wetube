const express = require('express');
const app = express();
const PORT = 4000;

function handleListening() {
    console.log(`listening started on port ${PORT}.`);
}

function handleHome(req, res) {
    console.log(req);
    res.send("hello - from home");
}

function handleProfile(req, res) {
    res.send("you are on my profile");
}

app.get("/", handleHome);

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