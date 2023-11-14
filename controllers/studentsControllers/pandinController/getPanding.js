import connectDb from "../../../mongoDB/connectDb";
import { Student } from "../../../mongoDB/models/models";

export default async function getPending(req, res) {
    try {
        connectDb();

        const data = await Student.find({}).exec();

        const returnData = data.filter((item) => item.status === false);
        res.status(200).json(returnData);
    } catch (err) {
        console.error("An error occurred:", err);
        res.status(500).json({ error: "There was a server side problem" });
    }
}

