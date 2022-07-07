import User from "../../models/User";
import { createJWTToken } from "../../util/auth";
import { encryptPassword, comparePassword } from "../../util/bcrypt";

const Mutation = {
  registerUser: async (_, { userName, password, email, displayName }) => {
    const user = new User({ userName, password, email, displayName });
    user.password = await encryptPassword(user.password);
    await user.save();
    const token = createJWTToken({
      _id: user._id,
      email: user.email,
      displayName: user.displayName,
    });
    return { token, user };
  },
  loginUser: async (_, { email, password }) => {
    const user = await User.findOne({ email }).select("+password");
    if (!user) throw new Error("Usuario no registrado");
    const validPassword = await comparePassword(password, user.password);
    if (!validPassword) throw new Error("Contraseña no válida");
    const token = createJWTToken({
      _id: user._id,
      email: user.email,
      displayName: user.displayName,
    });
    return { token, user };
  },
};

export default Mutation;
