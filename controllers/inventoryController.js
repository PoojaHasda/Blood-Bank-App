import mongoose from "mongoose";
import { User } from "../models/userModel.js";
import { Inventory } from "../models/inventoryModel.js";

//CREATE INVENTORY
const createInventoryController = async(req,res) => {
    try {
        const {email,inventoryType} = req.body
        //validation
        const user = await User.findOne({email})
        if (!user) {
            throw new Error("User not Found")
        }
        if (inventoryType === 'in' && user.role !== 'donar') {
            throw new Error("Not a Donar Account")
        }

        if (inventoryType === 'out' && user.role !== 'hospital') {
            throw new Error("Not a hospital")
        }

        //save record
        const inventory = new Inventory(req.body)
        await inventory.save()
        return res.status(201).send({
            success:true,
            message:'New Blood Record Added',
            
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'error in Create Inventory API',
            error,
        })
    }
}


//get all blood records
const getInventoryController = async(req,res) =>{
    try {
        const inventory = await Inventory.find({organisation:req.body.userId}).populate('donar').populate('hospital').sort({createdAt: -1})
        return res.status(201).send({
            success:true,
            message:'get all records succesfully',
            inventory
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Error in Get All Inventory',
            error,
    })
}}
export  {createInventoryController,getInventoryController}