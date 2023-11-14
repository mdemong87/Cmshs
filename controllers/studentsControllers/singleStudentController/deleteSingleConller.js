import { fileDelete } from "../../../helper/cloudinaryconfig";
import deletehelper from "../../../helper/deletehelper";
import connectDb from "../../../mongoDB/connectDb";
import { Student } from "../../../mongoDB/models/models";


async function deleteSingleConller(req, res) {

    const { id } = req.query;

    //connect Database
    connectDb();

    const singleData = await deletehelper(Student, id);

    //delete file from cloudinary
    const isdelete = await fileDelete(singleData);


    if (isdelete) {
        //delete single data
        await Student.deleteOne({ _id: id }, (err) => {
            if (!err) {
                res.status(200).json({
                    success: true,
                    Message: "Student Record Delete successfully"
                })

            } else {
                res.status(500).json({
                    success: false,
                    error: "There was a server side problem"
                })
            }
        }).clone()


    } else {
        res.status(500).json({
            success: false,
            error: "There was a server side problem............"
        })
    }

}


export default deleteSingleConller;