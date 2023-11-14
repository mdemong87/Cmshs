import { fileDelete } from "../../../helper/cloudinaryconfig";
import deletehelper from "../../../helper/deletehelper";
import connectDb from "../../../mongoDB/connectDb";
import { Student } from "../../../mongoDB/models/models";



export default async function deletePending(req, res) {

    const { id } = req.body;

    const singleData = await deletehelper(Student, id);

    //delete file from cloudinary
    const isdelete = await fileDelete(singleData);



    if (isdelete) {
        try {
            connectDb();
            const deletedStudent = await Student.findByIdAndDelete(id);

            if (deletedStudent) {
                res.status(200).json({ message: "Student deleted successfully", success: true });
            }
        } catch (error) {
            console.error("An error occurred:", error);
            res.status(500).json({ error: "There was a server side error" });
        }
    } else {
        res.status(500).json({
            success: false,
            error: "There was a server side problem"
        })
    }
}
