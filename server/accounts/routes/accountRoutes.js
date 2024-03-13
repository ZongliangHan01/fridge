import accountController from "../controllers/accountControllers.js";
import { Router } from 'express'

const router = Router();

router.post("/register", accountController.register);
router.post("/signin", accountController.signIn);
router.post("/signout", accountController.signOut);
router.get("/user", accountController.getCurrUser);
router.get("/", accountController.getProfile);
router.get("/update", accountController.updateProfile);

export default router;
