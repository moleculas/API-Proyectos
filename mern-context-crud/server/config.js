import dotenv from "dotenv";
dotenv.config();

export const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost/merndb";
export const PORT = process.env.PORT || 3100;
export const CLOUD_NAME = process.env.CLOUD_NAME;
export const API_KEY = process.env.API_KEY;
export const API_SECRET = process.env.API_SECRET;
// desarrollo
export const RUTA_FILES = "./client/public/files/";
// producción
//export const RUTA_FILES = "./client/build/files/";