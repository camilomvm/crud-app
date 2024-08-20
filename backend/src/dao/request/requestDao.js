import Database from "../../configs/db/connection/connection.js";
import {
  CREATE_REQUEST_QUERY,
  DELETE_EMPLOYE_QUERY,
  DELETE_REQUEST_BY_USER_ID_QUERY,
  DELETE_REQUEST_QUERY,
  GET_ALL_REQUEST_QUERY,
  GET_EMPLOYES_QUERY,
  INSERT_EMPLOYEE_QUERY,
  EDIT_EMPLOYEE_QUERY,
  TOTAL_EMPLOYES_QUERY,
  GET_EMPLOYEE_BY_ID_QUERY,
  GET_TOTAL_REQUEST,
  EDIT_REQUEST_QUERY,
  FILTER_EMPLOYEE_BY_NAME_QUERY,
  FILTER_REQUEST_BY_NAME_QUERY
} from "../../utils/constants/request/requestConstantsQuery.js";

export default {
  getEmployees: async (pageNumber, pageSize) => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(GET_EMPLOYES_QUERY, [
        pageNumber,
        pageSize,
      ]);

      return result.rows;
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },

  filterEmployeeByName: async (name) => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(FILTER_EMPLOYEE_BY_NAME_QUERY, [name]);

      return result.rows;
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
  getEmployeeById: async (id) => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(GET_EMPLOYEE_BY_ID_QUERY, [id]);

      return result.rows;
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
  totalEmployees: async () => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(TOTAL_EMPLOYES_QUERY);

      return result.rows[0];
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
  insertEmployee: async (data) => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(INSERT_EMPLOYEE_QUERY, [
        data.entry_date,
        data.name,
        data.salary,
      ]);

      return result.rows;
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
  updateEmployee: async (data) => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(EDIT_EMPLOYEE_QUERY, [data.entry_date,data.name,data.salary,data.id]);

      return result.rows;
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
  deleteEmployee: async (id) => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(DELETE_EMPLOYE_QUERY, [id]);

      return result.rows;
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
  deleteRequestByUserId: async (id) => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(DELETE_REQUEST_BY_USER_ID_QUERY, [id]);

      return result.rows;
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
  deleteRequest: async (id) => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(DELETE_REQUEST_QUERY, [id]);

      return result.rows;
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
  createRequest: async (data) => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(CREATE_REQUEST_QUERY, [
        data.code,
        data.description,
        data.summary,
        data.id_employee,
      ]);

      return result.rows;
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
  getTotalRequests: async () => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(GET_TOTAL_REQUEST);

      return result.rows[0];
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
  getAllRequests: async (pageNumber, pageSize) => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(GET_ALL_REQUEST_QUERY,[pageNumber, pageSize]);

      return result.rows;
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
  updateRequest: async (data) => {
    let client = undefined;
    try {
      client = await Database.getConnection();


      const result = await client.query(EDIT_REQUEST_QUERY,[data.code, data.description, data.summary, data.id]);

      return result.rows;
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
  filterRequestByName: async (name) => {
    let client = undefined;
    try {
      client = await Database.getConnection();

      const result = await client.query(FILTER_REQUEST_BY_NAME_QUERY,[name]);

      return result.rows;
    } finally {
      if (client) {
        await Database.release(client);
      }
    }
  },
};
