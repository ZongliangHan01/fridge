import accountController from "../controllers/accountControllers.js";
import { Router } from "express";


const router = Router();

router.get("/update", accountController.updateProfile);
router.get("/user", accountController.getCurrUser);
router.get("/profile", accountController.getProfile);
router.post("/register", accountController.register);
router.post("/signin", accountController.signIn);
router.post("/signout", accountController.logOut);


export default router;
