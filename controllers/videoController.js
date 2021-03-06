import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
        const videos = await Video.find({}).sort({ '_id': -1 });
        res.render("home", { pageTitle: "Home", videos });//videos:videos
    }
    catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};
export const search = async (req, res) => {
    const { query: { term: searchingBy } } = req;
    let videos = [];
    try {
        videos = await Video.find(
            { title: { $regex: searchingBy, $options: "i" } });
    }
    catch (error) {
        console.log(error);
    }
    res.render("search", { pageTitle: "search", searchingBy, videos });//searchingBy:searchingBy
};
export const videos1 = (req, res) => res.render("videos", { pageTitle: "videos" });

export const getUpload = (req, res) => res.render("upload", { pageTitle: "upload" });
export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,//title:title
        description//description:description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));//.id는 몽구스 model에서 제공해주는 api에서 자동으로 생성됨.
};

export const videoDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        console.log(video);
        res.render("video-detail", { pageTitle: video.title, video });//video:video
    }
    catch (error) {
        res.redirect(routes.home);
    }
};

export const getEditVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        //console.log(id);
        const video = await Video.findById(id);
        //console.log(video);
        res.render("edit-video", { pageTitle: `Edit ${video.title}`, video });
    }
    catch (error) {
        res.redirect(routes.home);
    }
};
export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;
    try {
        await Video.findOneAndUpdate({ _id: id }, { title, description });//model의 title : postEditVideo의 title.
        res.redirect(routes.videoDetail(id));
    }
    catch (error) {
        res.redirect(routes.home);
    }
};

export const deleteVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        await Video.findOneAndRemove({ _id: id });
    }
    catch (error) {
        console.log(error);
    }
    res.redirect(routes.home);
}

// 자바스크립트는 동시에 여러 일을 할 수 있음. 특정 문장이 시간이 오래 걸리는 일일 경우,
// 그 문장과 다음 문장을 동시에 수행하는데, 이는 오류의 원인이 될 수 있음. 이때 async/await를 사용.
// async는 자바스크립트에게 '이 함수의 [어떤 부분]은 꼭 기다려야 해'라고 말하는 것과 같음.
//await은 이 과정이 끝날 때까지 기다려 달라는 의미. aysnc의 [어떤 부분]에 해당.

//try는 우리가 해야 할 것들, 그리고 그것들이 실패하면 catch에서 해당 error들을 잡아냄.
//try/catch가 없는 상태에서는 작은 에러에도 nodeJS가 뻗어버리지만, 있으면 큰 에러가 아닐 경우 에러를 제외한 부분을 작동시키는게 가능함.