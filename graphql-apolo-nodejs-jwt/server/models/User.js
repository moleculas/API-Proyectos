const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,            
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Provide a valid email",
            ],
        },
        token: {
            type: String            
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("User", userSchema);