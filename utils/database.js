import mongoose from "mongoose";

let isConnected = false;  // Track the connection

export const connectToDB = async ()=>{
    mongoose.set('strictQuery')

    if (isConnected) {
        console.log('mongodb connected')
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {dbName: "share_prompt",useNewUrlParser: true, useUnifiedTopology: true})
    isConnected=true
    console.log('mongo connected')
    } catch (error) {
        console.log("Error in Database",error)
    }
}
