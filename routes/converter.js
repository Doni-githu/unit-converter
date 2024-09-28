import { Router } from "express";
import {getController, postController} from "../controllers/length.js"
import { getWeightController, postWeightController } from "../controllers/weight.js";
import { getTemperatureController, postTemperatureController } from "../controllers/temperature.js";
const router = Router()

router.get("/", getController)
router.post("/", postController)

router.get("/weight", getWeightController)
router.post("/weight", postWeightController)

router.get("/temperature", getTemperatureController)
router.post("/temperature", postTemperatureController)

export default router