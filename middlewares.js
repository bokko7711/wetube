import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleWare = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: false,
        id: 1
    };
    next();
};

export const uploadVideo = multerVideo.single('videoFile');//videoFile : upload.pug에 있는 name=videoFile인 input안에 있던 데이터.