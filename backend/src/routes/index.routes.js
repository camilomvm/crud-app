import { Router } from "express";
import loginController from "../controllers/login/loginController.js";
import userController from "../controllers/user/userController.js";
import requestController from "../controllers/request/requestController.js";
import { authentication } from "../middleware/auth.js";

const router = Router();

//login
router.post("/login", loginController.perfomLogin);
router.get("/find-user-by-id", authentication, userController.findUserById);

//users
router.post("/register-user", userController.registerUser);

//requests
router.get("/get-all-request", requestController.getAllRequests);
router.post("/create-request", requestController.createRequest);
router.put("/update-request", requestController.updateRequest);
router.delete("/delete-request", requestController.deleteRequest);
router.post("/filter-request-by-name", requestController.filterRequestByName);

//employee
router.get("/get-employees", requestController.getEmployees);
router.post("/insert-employee", requestController.insertEmployee);
router.delete("/delete-employee", requestController.deleteEmployee);
router.put("/update-employee", requestController.updateEmployee);
router.post("/filter-employee-by-name", requestController.filterEmployeeByName);

export default router;
