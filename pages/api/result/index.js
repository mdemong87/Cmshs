import { photoUpload } from "../../../helper/cloudinaryconfig";
import connectDb from "../../../mongoDB/connectDb";
import { ResultStudent } from "../../../mongoDB/models/models";

function hanlder(req, res) {

    const method = req.method;


    switch (method) {
        case "GET":
            forget(req, res);
            break;
        case "POST":
            forpost(req, res);
            break;
        default: res.status(405).json({ messege: 'Method Not Allow' })
            break;
    }


}
export default hanlder;




async function forget(req, res) {



    connectDb();

    await ResultStudent.find({}, (err, data) => {
        if (!err) {
            res.status(200).json({
                success: true,
                result: data
            })
        } else {
            res.status(500).json({
                success: false,
                error: "There was a server side problem"
            })
        }
    }).clone()


}





async function forpost(req, res) {


    const { year, examtype, classnum, file } = req.body;

    const mainfile = await photoUpload(file, "schoolwebfile", 300, "scale");


    connectDb();

    await ResultStudent.create({ year: year, examtype: examtype, classnum: classnum, file: mainfile }, (err, data) => {

        if (!err) {
            res.status(200).json({
                success: true,
                messege: "Resultsheet create successfully",
                file: data
            })
        } else {
            res.status(500).json({
                success: false,
                error: "There was a server side problem"
            })
        }
    })

}


