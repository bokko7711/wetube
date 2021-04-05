export const join = (req, res) => res.render("join");//req,res 순서 지켜야 함.
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");

export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("user-detail");
export const editProfile = (req, res) => res.render("edit-profile");
export const changePassword = (req, res) => res.render("change-password");
