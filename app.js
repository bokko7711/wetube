import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";

const app = express();
const PORT = 4000;

const handleHome = (req, res) => res.send("hello - from home");

const handleProfile = (req, res) => res.send("you are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);//누군가 /user경로에 접속하면, userRouter 전체를 사용할 수 있게 함.

export default app;
