import pg from "pg";
import dbConfig from "../environment/databaseEnvironment.js";
import * as genericPool from "generic-pool";

class Database {
  static _instance = null;
  static pool = null;

  constructor() {
    if (Database.pool) return;

    const factory = {
      create: async () => {
        if (!Database.pool) {
          Database.pool = new pg.Pool(dbConfig);
        }
        const client = await Database.pool.connect();
        return client;
      },
      destroy: async (client) => {
        client.release();
      },
    };

    const options = {
      min: 1,
      max: 200,
    };

    this.genericPool = genericPool.createPool(factory, options);
  }

  static instance() {
    return this._instance || (this._instance = new this());
  }

  async connect() {
    return await this.genericPool.acquire();
  }

  async getConnection() {
    return await this.connect();
  }

  async release(client) {
    if (client) {
      await this.genericPool.release(client);
    }
  }
}

export default Database.instance();
