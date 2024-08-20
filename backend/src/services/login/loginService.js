import { generateToken, generateRefreshToken } from "../../helper/jwt.js";
import userDao from "../../dao/user/userDao.js";

export default {
  perfomLogin: async (data) => {
    let user = await userDao.findUserByUsername(data.username);

    const credentials = user[0];

    if (credentials) {
      if (data.password == credentials.password) {
        let refresh = generateRefreshToken(credentials);
        let token = generateToken(credentials);

        return {refresh,token};
      }
    }

    if (!credentials) {
      throw new Error("Invalid username");
    }

    if (data.password !== credentials.password) {
      throw new Error("Invalid password");
    }
  },
};
