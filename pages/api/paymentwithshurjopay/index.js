// helper/mongoDB/connectDb.js
import ConnectDB from "../../../mongoDB/connectDb";
ConnectDB(); // Connect to the database on application start

// helper/paymentsystemUpdater&Deleter.js
import { customAlphabet } from "nanoid";
import { PaymentController, Student } from "../../../mongoDB/models/models";



async function handler(req, res) {
    try {
        const method = req.method;

        if (method === "POST") {
            await handlePostRequest(req, res);
        } else {
            res.status(405).json({ message: 'Method Not Allowed' });
        }
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ success: false, error: "There was a server-side problem" });
    }
}

async function handlePostRequest(req, res) {
    const { id, calas, title, month } = req.body;



    // Fetch student data and payment balance concurrently
    const [singleStudent, paymentBalance] = await Promise.all([
        Student.find({ customid: id }, 'customid fName lName faterName wadmit psVillage psUnion psUpazila psDistrict familyCall psDistrict psPost'),
        PaymentController.find({ classes: calas }, title)
    ]);

    if (!singleStudent.length) {
        return res.status(500).json({ success: false, error: "Student Id Doesn't Match in the System" });
    }

    const { customid, fName, lName, wadmit, faterName, psDistrict, psVillage, psUnion, psUpazila, familyCall, psPost } = singleStudent[0];

    if (calas != wadmit) {
        return res.status(500).json({ success: false, error: "Class Doesn't match in the system with the ID" });
    }

    if (!paymentBalance.length) {
        return res.status(500).json({
            success: false,
            error: "Payment balance not found or missing 'title' property."
        });
    }

    const corrospendingBalance = paymentBalance[0][title];

    //unique Id ganarator
    const uniqueIdganarator = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 12);
    const clientOrderID = uniqueIdganarator();


    const alldata = { customid, fName, lName, wadmit, psDistrict, psVillage, psUnion, psUpazila, familyCall, psPost, title, month, corrospendingBalance, clientOrderID };



    try {

        res.status(200).json({ success: true, res: alldata });

    } catch (error) {
        res.status(500).json({ success: false, error: "Payment was Failed" });
    }
}

export default handler;
