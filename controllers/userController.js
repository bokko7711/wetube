export const join = (req, res) => res.send("join");//req,res 순서 지켜야 함.
export const login = (req, res) => res.send("login");
export const logout = (req, res) => res.send("logout");

//arrow function에서의 implicit return : arrow function에서 중괄호가 없으면, 화살표 다음 내용에 암묵적으로 return이 포함된다.

function explicit1() {
    return true;//이게 원래 문법.
}

const implicit = () => true;//중괄호가 없으면, true 앞에 암묵적으로 return이 포함된다.
//const implicitError = () =>return true; <= 에러 발생

const explicit2 = () => {
    return true;//explicit1 함수와 explicit2는 완전히 동일하다. 중괄호가 있으므로 return을 붙인다.
}