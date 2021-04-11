import "./db";//이렇게...import할 수도 있었나..?
import app from "./app";

const PORT = 4000;

const whenServerRequested = () => {
    console.log("✔ now listening...");
}

app.listen(PORT, whenServerRequested);