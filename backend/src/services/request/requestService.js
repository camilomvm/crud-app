import requestDao from "../../dao/request/requestDao.js";

export default {
  getEmployees: async (pageNumber, pageSize) => {
    pageSize = parseInt(pageSize);
    pageNumber = pageSize * (parseInt(pageNumber) - 1);

    const { totalrecords } = await requestDao.totalEmployees();
    const result = await requestDao.getEmployees(pageNumber, pageSize);

    return { result, totalrecords };
  },
  filterEmployeeByName: async (name) => {
    const result = await requestDao.filterEmployeeByName(name);

    return result;
  },
  insertEmployee: async (data) => {
    const result = await requestDao.insertEmployee(data);

    return result;
  },
  updateEmployee: async (data) => {
    const result = await requestDao.updateEmployee(data);

    return result;
  },
  deleteEmployee: async (data) => {
    const result = await requestDao.deleteEmployee(data);
    await requestDao.deleteRequestByUserId(data);

    return result;
  },
  getAllRequests: async (pageNumber, pageSize) => {
    pageSize = parseInt(pageSize);
    pageNumber = pageSize * (parseInt(pageNumber) - 1);

    const { totalrecords } = await requestDao.getTotalRequests();
    const result = await requestDao.getAllRequests(pageNumber, pageSize);

    return { result, totalrecords };
  },
  createRequest: async (data) => {
    const result = await requestDao.createRequest(data);
    return result;
  },

  getEmployeeById: async (id) => {
    const employeeExists = await requestDao.getEmployeeById(id);

    return employeeExists;
  },
  deleteRequest: async (id) => {
    const result = await requestDao.deleteRequest(id);

    return result;
  },
  updateRequest: async (data) => {
    const result = await requestDao.updateRequest(data);

    return result;
  },
  filterRequestByName: async (name) => {
    const result = await requestDao.filterRequestByName(name);

    return result;
  },
};
