import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";//cookie 사용 미들웨어.
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

//express 공식문서 - api reference 클릭 - 왼쪽 Application 클릭 - app.set 클릭 (https://expressjs.com/en/4x/api.html#app.set)
app.set("view engine", "pug");//거기서 view engine이라는 태그를 찾을 수 잇음. 그 기본값은 null인데 pug로 바꾼다는 의미임.
app.use(cookieParser());//pug - mvc의 view를 담당해주는 템플릿 언어. express의 view engine임. html,css랑 거의 비슷하다.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;//default로 export한다는 건 이 파일 전체를 export한다는 뜻이었음!!
