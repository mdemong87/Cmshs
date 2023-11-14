import connectDb from "../../../mongoDB/connectDb";
import { PHistory } from "../../../mongoDB/models/models";

function hanlder(req, res) {
    const method = req.method;
    switch (method) {
        case "GET":
            forget(req, res);
            break;
        default: res.status(405).json({ messege: 'Method Not Allow' })
            break;
    }
}
export default hanlder;


//for post controller function
async function forget(req, res) {
    try {
        connectDb();
        const data = await PHistory.find({}).exec();
        res.status(200).json({
            success: true,
            paymenthistory: data
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
