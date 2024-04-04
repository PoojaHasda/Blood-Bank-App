import express from 'express';
import testRoutes from '../Blood Donation App/routes/testRoutes.js';
import router from '../Blood Donation App/routes/authRoutes.js';
import router1 from '../Blood Donation App/routes/inventoryRoutes.js';
// import registerController from './controllers/authController.js';
import 'dotenv/config'
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from '../Blood Donation App/config/db.js';

connectDB();


//rest object
const app = express()

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
//routes
// 1 test routes
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',router);
app.use('/api/v1/inventory',router1)


//port 
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT,() => {
    console.log(`Node server Running in ${process.env.DEV_MODE} on Port ${process.env.PORT}`.bgBlue.white);
})