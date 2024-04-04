import express from 'express';
import testController from '../controllers/testController.js'

//router object
const router = express.Router()

//rooutes
router.get('/', testController)

//export
export default router;
