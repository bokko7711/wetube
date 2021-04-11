import express from "express";
import { users, userDetail, editProfile, changePassword } from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.self, users);
userRouter.get(routes.userDetail(), userDetail);//userDetail이 변수에서 함수개 되었으므로 실행을 해주어야 함. videoDetail도 마찬가지
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;