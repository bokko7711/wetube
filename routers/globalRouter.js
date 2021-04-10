import express from "express";
import { postJoin, getJoin, login, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);//videoController에서 home 함수를 만들고 export해 두면, 여기서 home을 입력하기만 해도 자동 import 완성 기능이 뜸. 엔터치면 됨.
globalRouter.get(routes.search, search);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;