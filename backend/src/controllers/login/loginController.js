import loginService from "../../services/login/loginService.js";
import { sanitizeString } from "../../helper/sanitization.js";

export default {
  perfomLogin: async (req, res, next) => {
    try {
      const username = sanitizeString(req.body.username);
      const password = sanitizeString(req.body.password);

      const user = {
        username,
        password
      };
    
      const token = await loginService.perfomLogin(user);

      return res.status(200).json(token);
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
  }
}
