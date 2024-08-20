import Database from "../../configs/db/connection/connection.js";
import {
  FIND_USER_BY_USERNAME_QUERY,
  FIND_USER_BY_ID_QUERY,
  REGISTER_USER_QUERY,
} from "../../utils/constants/user/userConstants.js";

export default {
  findUserByUsername: async (data) => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(FIND_USER_BY_USERNAME_QUERY, [data]);

      return result.rows;
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
  findUserById: async (id) => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(FIND_USER_BY_ID_QUERY, [id]);

      return result.rows;
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
  registerUser: async (data) => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(REGISTER_USER_QUERY, [data.name,data.lastname,data.username,data.password,data.rol_id]);

      return result.rows;
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
};
