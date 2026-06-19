import mongoose from "mongoose";



const connectDB = async () => {
    try {
        mongoose.connection.on('connected', ()=> {
            console.log("Database Connected");
        })
      await mongoose.connect(`${process.env.MONGODB_URI}/blogging`)  
    } catch (error) {
        console.log("Error : ",error.message);
    }
}

export default connectDB;