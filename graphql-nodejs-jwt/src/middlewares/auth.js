import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config";

export const authenticate = (req, res, next) => {
    next()
    // const token = req.headers.authorization?.split(" ")[1] || "";
    // jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    //     if (err || !decodedToken) {            
    //         return res.status(401).json({ message: "No estás autorizado" });
    //     };
    //     next();
    // });
};

