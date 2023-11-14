import { photoUpload } from "../../../helper/cloudinaryconfig";
import connectDb from "../../../mongoDB/connectDb";
import { Routing } from "../../../mongoDB/models/models";

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
    try {
        connectDb();
        const data = await Routing.find({}).exec();
        res.status(200).json({
            success: true,
            routing: data
        });
    } catch (err) {
        console.error("An error occurred:", err);
        res.status(500).json({
            success: false,
            error: "There was a server side problem"
        });
    }
}




async function forpost(req, res) {
    try {
        const { catagory, classnum, file } = req.body;

        //upload file
        const mainfile = await photoUpload(file, "schoolwebfile", 300, "scale");

        const alldata = {
            catagory,
            classNumber: classnum,
            file: mainfile,
        };

        connectDb();
        const data = await Routing.create(alldata);

        res.status(200).json({
            success: true,
            routing: data,
        });
    } catch (err) {
        console.error("An error occurred:", err);
        // Other server-side error
        res.status(500).json({
            success: false,
            error: "There was a server-side problem",
        });

    }
}
