import express from "express";
import { deleteVideo, editVideo, upload, videoDetail, videos } from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();//앞에 export가 붙으면 이 변수만 export한다는 뜻.

videoRouter.get(routes.self, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;//default - file로 export한다는 뜻.

