import mongoose from "mongoose";

async function ConnectDB() {

    //connect database
    await mongoose.connect(`${process.env.NEXT_PUBLIC_DATABASE_URL}`, (err) => {
        if (!err) {
            console.log("database is connected...");
        } else {
            console.log("database is not connected...");
        }
    });
}

export default ConnectDB;