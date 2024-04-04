import mongoose from "mongoose";
import colors from "colors";

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connection To Mongodb Database ${mongoose.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Mongodb Database Error ${error}`.bgRed.black);
    }
}

export default connectDB;