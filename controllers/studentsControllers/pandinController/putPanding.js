import connectDb from "../../../mongoDB/connectDb";
import { Student } from "../../../mongoDB/models/models";

export default async function putPending(req, res) {
    try {
        const { id, sttus } = req.body;
        const sendData = {
            status: sttus,
        };

        connectDb();

        const updatedStudent = await Student.findByIdAndUpdate(id, sendData, { new: true });

        if (updatedStudent) {
            res.status(200).json({ message: "Student status updated successfully", success: true, student: updatedStudent });
        }
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ error: "There was a server side error" });
    }
}
