import 'dotenv/config';
import { server } from "./server";
import "./database";
import { PORT } from "./config.js";
import { authenticate } from "./middlewares/auth";

server.express.use(authenticate);

server.start({ port: PORT }, ({ port }) => {
  console.log("Server on port", port);
});
