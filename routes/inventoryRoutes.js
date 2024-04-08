import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {createInventoryController,getDonarsController,getHospitalController,getInventoryController, getInventoryHospitalController, getOrganisationController, getOrganisationForHospitalController, getRecentInventoryController} from "../controllers/inventoryController.js";

const router1 = express.Router()

//routes
//ADD inventry
router1.post('/create-inventory',authMiddleware,createInventoryController)


//GET ALL BLOOD RECORDS
router1.get('/get-inventory',authMiddleware,getInventoryController)

//GET REcent BLOOD RECORDS
router1.get('/get-recent-inventory',authMiddleware,getRecentInventoryController)


//GET BLOOD RECORDS
router1.post('/get-inventory-hospital',authMiddleware,getInventoryHospitalController)

//GET BLOOD RECORDS
router1.get('/get-donars',authMiddleware,getDonarsController )


//GET HOSPITALS RECORDS
router1.get('/get-hospitals',authMiddleware,getHospitalController )


//GET ORGANISATION RECORDS
router1.get('/get-organisation',authMiddleware,getOrganisationController)

//GET ORGANISATION RECORDS
router1.get('/get-organisation-for-hospital',authMiddleware,getOrganisationForHospitalController)

export default router1;