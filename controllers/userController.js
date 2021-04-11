import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "join" });
};
export const postJoin = (req, res) => {//req => get/post request 요청을 받을 때, 딸려오는 데이터가 담겨 있음.
    console.log(req.body);
    const { body: { name, email, password, password2 } } = req;
    if (password !== password2) {
        res.status(400);//400(http status code의 일종)은 뭔가 문제가 있는 응답이라는 뜻. 잘못된 요청이라는 상태코드로 render가 되는 거임.
    }
    else {
        //To Do : Register user
        //To Do : Log user in
        res.redirect(routes.home);
    }
    res.render("join", { pageTitle: "join" });
};
export const getLogin = (req, res) => res.render("login", { pageTitle: "login" });
export const postLogin = (req, res) => {
    //To Do : database
    res.redirect(routes.home);
}
export const logout = (req, res) => res.render("logout", { pageTitle: "logout" });

export const users = (req, res) => res.render("users", { pageTitle: "users" });
export const userDetail = (req, res) => res.render("user-detail", { pageTitle: "user-detail" });
export const editProfile = (req, res) => res.render("edit-profile", { pageTitle: "edit-profile" });
export const changePassword = (req, res) => res.render("change-password", { pageTitle: "change-password" });
