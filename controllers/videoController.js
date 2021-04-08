export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => {
    //const searchingBy = req.query.term;//header.pug에서 보낸 데이터가 req에 담김.
    //console.log(searchingBy);
    const { query: { term: searchingBy } } = req;//
    res.render("search", { pageTitle: "search", searchingBy });//searchingBy:searchingBy
};
export const videos = (req, res) => res.render("videos", { pageTitle: "videos" });
export const upload = (req, res) => res.render("upload", { pageTitle: "upload" });
export const videoDetail = (req, res) => res.render("video-detail", { pageTitle: "video-detail" });
export const editVideo = (req, res) => res.render("edit-video", { pageTitle: "edit-video" });
export const deleteVideo = (req, res) => res.render("delete-video", { pageTitle: "delete-video" });
