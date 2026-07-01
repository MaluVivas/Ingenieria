import { Router } from "express";
import { getLocations, getLocationsByCategory, getLocationById  } from "../controller/locationsController";


const router = Router();

router.get("/", getLocations);
router.get("/detail/:id", getLocationById);
router.get("/:category", getLocationsByCategory);


export default router;