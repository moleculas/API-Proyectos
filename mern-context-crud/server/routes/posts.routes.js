
import { Router } from "express";
import {
    getPost,
    createPost,
    updatePost,
    removePost,
    getPosts,
} from "../controllers/posts.controllers";
import middlewares from "../middlewares";

const router = Router();

router.get("/", (req, res) => {
    res.send('Servidor operativo')
});

router.get("/posts", getPosts);

router.get("/posts/:id", getPost);

router.post("/posts", middlewares.verifyFileExists, createPost);

router.put("/posts/:id", middlewares.verifyFileExists, updatePost);

router.delete("/posts/:id", removePost);

export default router;