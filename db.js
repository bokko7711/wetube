import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/we-tube", {
    useNewUrlParser: true,//이 부분들은 최신 버전의 mongoose를 사용하면 자동으로 설정되어있는거지만, 그래도 확실하게 하기 위해 써두는거임. 신경ㄴㄴ
    useFindAndModify: false
});
//mongoose connection을 열어 database와 연결될 수 있게 해줌.
//mongoose.connect("mongodb://localhost:포트번호(mongod를 통해 확인가능)/database이름");
const db = mongoose.connection;

const handleOpen = () => console.log("✔ connected to DB");
const handleError = (error) => console.log(`❌error on DB connection : ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);