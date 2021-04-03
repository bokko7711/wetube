import app from "./app";

const PORT = 4000;

const whenServerRequested = () => {
    console.log("now listening...");
}

app.listen(PORT, whenServerRequested);