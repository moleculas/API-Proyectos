import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true, //elimina espacios en blanco
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        image: {   
            type: String,   
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model("Post", postSchema);