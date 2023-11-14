import getPayment from "../../../../controllers/studentsControllers/paymentController/getPeyment";
import putPayment from "../../../../controllers/studentsControllers/paymentController/putPayment";
import connectDb from "../../../../mongoDB/connectDb";

export default function paymentHandler(req, res) {
    connectDb();
    const method = req.method;
    switch (method) {
        case "GET":
            getPayment(req, res);
            break;
        case "PUT":
            putPayment(req, res);
            break;
        default: res.status(405).json({ messege: 'Method Not Allow' })
            break;
    }

}