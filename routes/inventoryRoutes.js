import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {createInventoryController,getInventoryController} from "../controllers/inventoryController.js";

const router1 = express.Router()

//routes
//ADD inventroy
router1.post('/create-inventory',authMiddleware,createInventoryController)


//GET ALL BLOOD RECORDS
router1.get('/get-inventory',authMiddleware,getInventoryController)
export default router1;

