export const home = (req, res) => res.render("home");//render - views 폴더에서 이름이 home이고 확장자가 pug인 파일을 찾은 후 보여줌.
export const search = (req, res) => res.render("search");
export const videos = (req, res) => res.render("videos");
export const upload = (req, res) => res.render("upload");
export const videoDetail = (req, res) => res.render("video-detail");
export const editVideo = (req, res) => res.render("edit-video");
export const deleteVideo = (req, res) => res.render("delete-video");
