import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";//post된 form 데이터를 자바스크립트에서 확인하기 위해 사용.
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleWare } from "./middlewares";

const app = express();

app.use(helmet());
app.use(function (req, res, next) {//동영상을 볼 수가 없어서 일단 임시로 이 middleware 추가함.
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
});
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleWare);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
