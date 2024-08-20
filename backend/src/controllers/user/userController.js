import userService from "../../services/user/userService.js";
import loginService from "../../services/login/loginService.js";
import { sanitizeString, sanitizeNumber } from "../../helper/sanitization.js"; // Importa funciones de saneamiento

export default {
  perfomLogin: async (req, res, next) => {
    try {
      // Saneamiento de entradas
      const username = sanitizeString(req.body.username);
      const password = sanitizeString(req.body.password);

      const user = {
        username,
        password
      };

      const token = await loginService.perfomLogin(user);

      return res.status(200).json({
        token
      });
    } catch (e) {
      if (e.message === 'Invalid username') {
        return res.status(404).json({ 
          error: 'Username not found'
        });
      }

      if (e.message === 'Invalid password') {
        return res.status(401).json({ 
          error: 'Incorrect password'
        });
      }

      next(e);
    }
  },

  findUserById: async (req, res, next) => {
    try {
      const id = sanitizeNumber(req.decodedToken.id);
      const result = await userService.findUserById(id);

      return res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  },

  registerUser: async (req, res, next) => {
    try {
      // Saneamiento de las entradas
      const name = sanitizeString(req.body.name);
      const lastname = sanitizeString(req.body.lastname);
      const username = sanitizeString(req.body.username);
      const password = sanitizeString(req.body.password);
      const rol_id = sanitizeNumber(req.body.rol_id);

      if (!name || !lastname || !username || !password || typeof rol_id !== "number") {
        return res.status(400).json({ message: "Missing or invalid fields" });
      }

      const user = { name, lastname, username, password, rol_id };

      await userService.registerUser(user);

      return res.status(201).json({ message: "User created successfully" });
    } catch (e) {
      next(e);
    }
  },
};
