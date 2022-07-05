import fs from "fs-extra";
import path from "path";

const verifyFileExists = (req, res, next) => {
    if (!req.files?.image) {
        return res.sendStatus(404);
    };
    try {
        const file = req.files.image;
        const elPath = path.join(__dirname, `../../client/public/files/${file.name}`);
        if (fs.existsSync(elPath)) {
            res.locals.nombreImagen = 'Copia-' + file.name;
        } else {
            res.locals.nombreImagen = file.name;
        };
        next();
    } catch (err) {
        return res.status(500).json({ message: error.message });
    };
};

export default verifyFileExists;