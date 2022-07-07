import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3100;
export const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost/graphqlreactdb";
export const JWT_SECRET = process.env.JWT_SECRET || "isaiasherreroflorensa";
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";