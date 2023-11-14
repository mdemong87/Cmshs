import { fileDelete } from "../../../../helper/cloudinaryconfig";
import deletehelper from "../../../../helper/deletehelper";
import connectDb from "../../../../mongoDB/connectDb";
import { Sylabus } from "../../../../mongoDB/models/models";


function hanlder(req, res) {

    const method = req.method;

    switch (method) {
        case "DELETE":
            fordelete(req, res);
            break;
        default: res.status(405).json({ messege: 'Method Not Allow' })
            break;
    }


}


export default hanlder;


async function fordelete(req, res) {

    const id = req.query.id;

    //database connection
    connectDb();


    const singleData = await deletehelper(Sylabus, id);

    //delete file from cloudinary
    const isdelete = await fileDelete(singleData);

    if (isdelete) {
        //delete single data
        await Sylabus.deleteOne({ _id: id }, (err) => {
            if (!err) {
                res.status(200).json({
                    success: true,
                    error: "Routing delete successfully"
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
            error: "There was a server side problem"
        })
    }



}