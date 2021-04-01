import express from "express";
const app = express();
const PORT = 4000;

const handleListening = () => {
    console.log(`listening started on port ${PORT}.`);
}

const handleHome = (req, res) => res.send("hello - from home");

const handleProfile = (req, res) => res.send("you are on my profile");
const middleWareOfHome = (req, res, next) => {
    console.log("middleWare function operated.");
    next();
};

app.use(middleWareOfHome);

app.get("/", handleHome);
//app.get("/", middleWareOfHome, handleHome);

app.get("/profile", handleProfile);
//diy
/*import express from "express";
const app = express();
const PORT = 4000;
const handleListening = () => {
    console.log(`listening started on port ${PORT}.`);
}
const handleHome = (req, res) => {
    //console.log(req);
    res.send("hello - from home");
}
const handleProfile = (req, res) => {
    res.send("you are on my profile");
}
const middleWare = (req, res, next) => {
    console.log("middleWare function operated.");
    next();
}
app.use(middleWare);

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
*/