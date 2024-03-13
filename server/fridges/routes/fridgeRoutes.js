// const express = require("express");
// const router = express.Router();
// const fridgeController = require("../controllers/fridgeControllers.js");
import fridgeController from "../controllers/fridgeControllers.js";
import { Router } from 'express'

const router = Router();

router.get("/:uid", fridgeController.getAllItems);

router.get("/:uid/:id", fridgeController.getItem);

router.post("/:uid", fridgeController.addItem);

router.put("/:uid/:id", fridgeController.updateItem);

router.delete("/:uid/:id", fridgeController.deleteItem);

export default router;