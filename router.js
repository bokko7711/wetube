import express from "express";

export const userRouter = express.Router();//특정 주소가 라우터로서 기능하게 함.

userRouter.get("/", (req, res) => res.send('user index'));
userRouter.get("/edit", (req, res) => res.send('user edit'));
userRouter.get("/password", (req, res) => res.send('user password'));
