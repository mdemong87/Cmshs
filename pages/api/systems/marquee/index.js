import connectDb from "../../../../mongoDB/connectDb";
import { Marquee } from "../../../../mongoDB/models/models";

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

        const data = await Marquee.find({}).exec();

        res.status(200).json({
            success: true,
            marquee: data
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
        const { text } = req.body;

        connectDb();

        const marquee = await Marquee.create({ marquee: text });

        res.status(200).json({
            success: true,
            message: "Marquee created successfully",
            marquee: marquee,
        });
    } catch (err) {
        console.error("An error occurred:", err);

        res.status(500).json({
            success: false,
            error: "There was a server side problem",
        });
    }
}
