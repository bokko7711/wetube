import "./db";//이렇게...import할 수도 있었나..?default export한거 받을때 이렇게해도 되는듯.
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";

const PORT = process.env.PORT || 4000;

const whenServerRequested = () => {
    console.log("✔ now listening...");
}

app.listen(PORT, whenServerRequested);