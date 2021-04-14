import express from "express";
import { deleteVideo, getEditVideo, postEditVideo, getUpload, postUpload, videoDetail, videos1 } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.self, videos1);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
videoRouter.get(routes.deleteVideo(), deleteVideo);
// console.log(routes.editVideo); -> [Function: editVideo]
// console.log(routes.editVideo()); -> /:id/edit


export default videoRouter;

// (Someone uploaded video)
// → upload.pug : post ( /videos/upload에 저장 )
// → videoRouter.js ( /videos/upload 정보를 post해서 그 다음 두 과정(uploadVideo, postUpload) 수행 )

// 1) uploadVideo
// middleware.js : multer ( /video에 들어있는 모든 파일 정보를 불러옴 )

// 2) postUpload
// videoController.js : fileUrl, title, description 정보를 생성,
// id값을 가지고 routes.videoDetail 페이지로 redirect

// → videoDetail.pug로 상세페이지 보여줌