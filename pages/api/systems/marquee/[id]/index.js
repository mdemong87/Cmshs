import connectDb from "../../../../../mongoDB/connectDb";
import { Marquee } from "../../../../../mongoDB/models/models";

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
    try {
        connectDb();

        const result = await Marquee.deleteOne({ _id: req.query.id });

        if (result.deletedCount === 1) {
            res.status(200).json({
                success: true,
                message: "Marquee deleted successfully",
            });
        }
    } catch (err) {
        console.error("An error occurred:", err);

        res.status(500).json({
            success: false,
            error: "There was a server side problem",
        });
    }
}
