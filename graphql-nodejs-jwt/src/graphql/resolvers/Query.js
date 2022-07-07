import User from "../../models/User";

const Query = {
  ping() {
    return "pong";
  },
  users: async () => {
    return await User.find();
  },
};

export default Query;
