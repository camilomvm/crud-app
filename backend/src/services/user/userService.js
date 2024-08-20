import userDao from "../../dao/user/userDao.js";

export default {
  findUserById: async (id) => {
    const result = await userDao.findUserById(id);

    return result[0];
  },
  registerUser: async (data) => {
    await userDao.registerUser(data);

    return {
      message: "creted",
    };
  }
};
