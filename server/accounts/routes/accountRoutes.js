import accountController from "../controllers/accountControllers.js";
import { Router } from 'express'

const router = Router();

router.post("/register", accountController.register);
router.get("/signin", accountController.signIn);
router.get("/signout", accountController.signOut);
router.get("/", accountController.getProfile);
router.get("/update", accountController.updateProfile);

export default router;
