import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required"//error message.
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,//자바스크립트의 Date객체임.
        default: Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

const model = mongoose.model("Video", VideoSchema);//모델이름, 스키마
export default model;
// [Model]
// mongoose로 스키마를 만든다. 모델을 만들어 이를 export해준다.
// 그리고, Init에서 만든 Model을 import 해온다.
// [Schema]
// model의 형식. model이 가져야 할 필수 요소들의 틀을 만들어줌.
// [Relationship]
// 서로 다른 Schema를 가진 서로 다른 데이터가 문맥상(웹 상에서) 연관성을 가지고 있을 때 서로의 Schema를 ref를 통해 연결 시켜준다.
// 다만, 데이터를 통으로 연결 시켜주는 것이 아닌, id(=데이터의 이름)만 넘겨주는 방식.