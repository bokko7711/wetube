import routes from "../routes";

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos });//videos:videos

};
export const search = (req, res) => {
    //const searchingBy = req.query.term;//header.pug에서 보낸 데이터가 req에 담김.
    const { query: { term: searchingBy } } = req;//
    res.render("search", { pageTitle: "search", searchingBy, videos });//searchingBy:searchingBy
};
export const videos1 = (req, res) => res.render("videos", { pageTitle: "videos" });

export const getUpload = (req, res) => res.render("upload", { pageTitle: "upload" });
export const postUpload = (req, res) => {
    const { body: { file, title, description } } = req;
    //To Do : Upload/save video
    res.redirect(routes.videoDetail(4536));
};

export const videoDetail = (req, res) => res.render("video-detail", { pageTitle: "video-detail" });
export const editVideo = (req, res) => res.render("edit-video", { pageTitle: "edit-video" });
export const deleteVideo = (req, res) => res.render("delete-video", { pageTitle: "delete-video" });
