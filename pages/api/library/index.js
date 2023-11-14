import { photoUpload } from "../../../helper/cloudinaryconfig";
import connectDb from "../../../mongoDB/connectDb";
import { Library } from "../../../mongoDB/models/models";

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
        const data = await Library.find({}).exec();
        res.status(200).json({
            success: true,
            library: data
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
        const {
            title,
            author,
            catagory,
            publisher,
            classes,
            subject,
            language,
            discription,
            thumnal,
            book
        } = req.body;

        //upload file
        const Bookthumnal = await photoUpload(thumnal, "schoolwebphoto", 300, "scale");

        const Booktpdf = await photoUpload(book, "schoolwebfile", 300, "scale");

        const alldata = {
            title,
            author,
            catagory,
            publisher,
            classes,
            subject,
            language,
            discription,
            thumnals: Bookthumnal,
            books: Booktpdf
        };

        connectDb();
        const data = await Library.create(alldata);

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
