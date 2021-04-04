import express from "express";
import routes from "../routes";// 온점을 2개 쓴 ../는 상위 폴더에서 찾는다는 의미. ().=>위로, /=>아래로)

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("home"));
globalRouter.get(routes.join, (req, res) => res.send("join"));
globalRouter.get(routes.login, (req, res) => res.send("login"));
globalRouter.get(routes.logout, (req, res) => res.send("logout"));
globalRouter.get(routes.search, (req, res) => res.send("search"));

export default globalRouter;