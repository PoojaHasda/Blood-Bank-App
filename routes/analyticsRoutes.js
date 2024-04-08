import express from "express";
import bloodGroupDetailsContoller from "../controllers/analyticsController.js";
import authMiddleware from '../middlewares/authMiddleware.js'



const router2 = express.Router();

//routes

//GET BLOOD DATA
router2.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsContoller);

export default router2