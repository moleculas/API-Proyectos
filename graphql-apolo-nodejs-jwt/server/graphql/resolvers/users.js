const User = require('../../models/User');
const { ApolloError } = require('apollo-server-errors');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_EXPIRES_IN, JWT_SECRET } = require("../../config");

module.exports = {
    Mutation: {
        async registerUser(_, { registerInput: { userName, email, password } }) {
            const oldUser = await User.findOne({ email });
            if (oldUser) {
                throw new ApolloError('Ya hay un usuario registrado con el email ' + email, 'USER_ALREADY_EXISTS');
            };
            let encryptedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({
                userName: userName,
                email: email.toLowerCase(),
                password: encryptedPassword
            });
            const token = jwt.sign({
                user_id: newUser._id,
                email
            }, JWT_SECRET, {
                expiresIn: JWT_EXPIRES_IN,
            });
            newUser.token = token;
            const res = await newUser.save();
            return {
                id: res.id,
                ...res._doc
            }
        },
        async loginUser(_, { loginInput: { email, password } }) {
            const user = await User.findOne({ email });
            if (user && (await bcrypt.compare(password, user.password))) {
                const token = jwt.sign({
                    user_id: user._id,
                    email
                }, JWT_SECRET, {
                    expiresIn: JWT_EXPIRES_IN,
                });
                user.token = token;
                return {
                    id: user.id,
                    ...user._doc
                };
            }else {
                throw new ApolloError('Contraseña incorrecta', 'INCORRECT_PASSWORD');
            };
        },
    },
    Query: {
        user: (_, { ID }) => User.findById(ID)
    }
}