const server = require("./server");
const { connectDB } = require("./db");
const { PORT } = require("./config");

connectDB();
server.listen({port: PORT});
console.log("Servidor operativo en puerto:", PORT);