import requestService from "../../services/request/requestService.js";
import { sanitizeString, sanitizeNumber } from "../../helper/sanitization.js";

export default {
  getEmployees: async (req, res, next) => {
    try {
      const pageSize = sanitizeNumber(req.query.pageSize);
      const pageNumber = sanitizeNumber(req.query.pageNumber);

      if (isNaN(pageSize) || isNaN(pageNumber)) {
        return res
          .status(400)
          .json({ message: "Invalid pageSize or pageNumber" });
      }

      const employee = await requestService.getEmployees(pageSize, pageNumber);
      return res.status(200).json(employee);
    } catch (e) {
      next(e);
    }
  },

  filterEmployeeByName: async (req, res, next) => {
    try {
      const name = sanitizeString(req.body.name);

      if (!name) {
        return res.status(400).json({ message: "Name is required" });
      }

      let content = await requestService.filterEmployeeByName(name);
      return res.status(200).json(content);
    } catch (e) {
      next(e);
    }
  },

  insertEmployee: async (req, res, next) => {
    try {
      const entry_date = sanitizeString(req.body.entry_date);
      const name = sanitizeString(req.body.name);
      const salary = sanitizeNumber(req.body.salary);

      if (!entry_date || !name || !salary) {
        return res.status(400).json({ message: "All fields are required" });
      }

      if (name.length > 50) {
        return res
          .status(400)
          .json({ message: "Field 'name' exceeds 50 characters" });
      }

      const employee = { entry_date, name, salary };
      await requestService.insertEmployee(employee);

      return res.status(201).json({ message: "Employee created successfully" });
    } catch (e) {
      next(e);
    }
  },

  updateEmployee: async (req, res, next) => {
    try {
      const id = sanitizeNumber(req.body.id);
      const entry_date = sanitizeString(req.body.entry_date);
      const name = sanitizeString(req.body.name);
      const salary = sanitizeNumber(req.body.salary);

      if (!id || !entry_date || !name || !salary) {
        return res.status(400).json({ message: "All fields are required" });
      }

      if (name.length > 50) {
        return res
          .status(400)
          .json({ message: "Field 'name' exceeds 50 characters" });
      }

      const employee = { id, entry_date, name, salary };
      await requestService.updateEmployee(employee);

      return res.status(200).json({ message: "Employee updated successfully" });
    } catch (e) {
      next(e);
    }
  },

  deleteEmployee: async (req, res, next) => {
    try {
      const id = sanitizeNumber(req.body.id);

      if (!id) {
        return res.status(400).json({ message: "ID is required" });
      }

      await requestService.deleteEmployee(id);
      return res.status(200).json({ message: "Employee deleted successfully" });
    } catch (e) {
      next(e);
    }
  },

  getAllRequests: async (req, res, next) => {
    try {
      const pageSize = sanitizeNumber(req.query.pageSize);
      const pageNumber = sanitizeNumber(req.query.pageNumber);

      if (isNaN(pageSize) || isNaN(pageNumber)) {
        return res
          .status(400)
          .json({ message: "Invalid pageSize or pageNumber" });
      }

      const result = await requestService.getAllRequests(pageSize, pageNumber);
      return res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  },

  createRequest: async (req, res, next) => {
    try {
      const code = sanitizeString(req.body.code);
      const description = sanitizeString(req.body.description);
      const summary = sanitizeString(req.body.summary);
      const id_employee = sanitizeNumber(req.body.id_employee);

      if (!code || !description || !summary || !id_employee) {
        return res.status(400).json({ message: "All fields are required" });
      }

      if (code.length > 50 || description.length > 50 || summary.length > 50) {
        return res
          .status(400)
          .json({ message: "Fields cannot exceed 50 characters" });
      }

      const employee = await requestService.getEmployeeById(id_employee);

      if (employee.length === 0 || !employee) {
        return res.status(404).json({ message: "Employee ID not found" });
      }

      const newRequest = { code, description, summary, id_employee };
      await requestService.createRequest(newRequest);

      return res.status(201).json({ message: "Request created successfully" });
    } catch (e) {
      next(e);
    }
  },

  deleteRequest: async (req, res, next) => {
    try {
      const id = sanitizeNumber(req.body.id);

      if (!id) {
        return res.status(400).json({ message: "ID is required" });
      }

      await requestService.deleteRequest(id);
      return res.status(200).json({ message: "Request deleted successfully" });
    } catch (e) {
      next(e);
    }
  },

  updateRequest: async (req, res, next) => {
    try {
      const id = sanitizeNumber(req.body.id);
      const code = sanitizeString(req.body.code);
      const description = sanitizeString(req.body.description);
      const summary = sanitizeString(req.body.summary);

      if (!id || !code || !description || !summary) {
        return res.status(400).json({ message: "All fields are required" });
      }

      if (code.length > 50 || description.length > 50 || summary.length > 50) {
        return res
          .status(400)
          .json({ message: "Fields cannot exceed 50 characters" });
      }

      const request = { id, code, description, summary };
      await requestService.updateRequest(request);

      return res.status(200).json({ message: "Request updated successfully" });
    } catch (e) {
      next(e);
    }
  },

  filterRequestByName: async (req, res, next) => {
    try {
      const name = sanitizeString(req.body.name);

      if (!name) {
        return res.status(400).json({ message: "Name is required" });
      }

      let content = await requestService.filterRequestByName(name);
      return res.status(200).json(content);
    } catch (e) {
      next(e);
    }
  },
};
