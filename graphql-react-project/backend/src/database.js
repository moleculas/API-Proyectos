import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Db is connected"))
  .catch((err) => console.log(err));
