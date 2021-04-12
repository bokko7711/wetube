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
    }
});

const model = mongoose.model("Video", VideoSchema);//모델이름, 스키마
export default model;