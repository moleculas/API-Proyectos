const { config } = require("dotenv");
config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/graphqlapolloreactdb",
  PORT: process.env.PORT || 3100,
  JWT_SECRET: process.env.JWT_SECRET || "isaiasherreroflorensa",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d",
};