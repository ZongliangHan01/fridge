// const express = require("express");
// const router = express.Router();
// const fridgeController = require("../controllers/fridgeControllers.js");
import fridgeController from "../controllers/fridgeControllers.js";
import { Router } from 'express'

const router = Router();

router.get("/", fridgeController.getAllItems);

router.get("/:id", fridgeController.getItem);

router.post("/", fridgeController.addItem);

router.put("/:id", fridgeController.updateItem);

router.delete("/:id", fridgeController.deleteItem);

export default router;