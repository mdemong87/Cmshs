import { customAlphabet } from "nanoid";
import { photoUpload } from "../../../helper/cloudinaryconfig";
import connectDb from "../../../mongoDB/connectDb";
import { Employee } from "../../../mongoDB/models/models";

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
        const data = await Employee.find({}).exec();
        res.status(200).json({
            success: true,
            employee: data
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
        const { catagory, name, age, position, address, phone, email, edu, file } = req.body;

        //create unice id
        const customid = customAlphabet("1234567890", 5)

        //upload file
        const mainfile = await photoUpload(file, "schoolwebphoto", 300, "scale");

        const alldata = {
            name,
            age,
            catagory,
            position,
            edu,
            phone,
            email,
            address,
            file: mainfile,
            customid: customid()
        };

        connectDb();
        const data = await Employee.create(alldata);

        res.status(200).json({
            success: true,
            employee: data,
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
