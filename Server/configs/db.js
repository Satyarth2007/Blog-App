import mongoose from "mongoose";



const connectDB = async () => {
    try {

        mongoose.connection.on('connected', ()=> {
            console.log("Database Connected");
        })
      const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
      console.log(`DB connected :: DB HOST :: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error : ",error);
    }
}

export default connectDB;