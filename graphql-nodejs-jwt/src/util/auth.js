import * as jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config";

export const createJWTToken = (user) => {
    return jwt.sign({ user }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
    });
};

