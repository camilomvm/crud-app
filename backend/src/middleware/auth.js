import tokenEnvironment from '../configs/db/environment/serverEnvironments.js'
import jwt from "jsonwebtoken";

export const authentication = (req,res,next) => {
    let token = req.get("Authorization");
  
    if (token) {
      if (token.startsWith("Bearer ")) {
        token = token.slice(7);
      }
  
      try {
        const decoded = jwt.verify(
          token,
          tokenEnvironment.SECRET_TOKEN_KEY
        )
        req.decodedToken = decoded;
        next();
      } catch (err) {
        console.error(err);
        next(new Error('Invalid Credentials'));
      }
    } else {
      next(new Error('Invalid Credentials'));
    }
  };
  