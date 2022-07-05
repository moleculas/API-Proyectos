import express from "express";
import fileUpload from "express-fileupload";
import postsRoutes from "./routes/posts.routes";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//files
app.use(
    fileUpload({
        tempFileDir: "./upload",
        useTempFiles: true,
    })
);

// Routes
app.use(postsRoutes);

export { app };