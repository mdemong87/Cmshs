import smspost from "../../../helper/bluksmsconfig";
import connectDb from "../../../mongoDB/connectDb";
import { Employee, Student } from "../../../mongoDB/models/models";

function hanlder(req, res) {

    const method = req.method;


    switch (method) {
        case "POST":
            forpost(req, res);
            break;
        default: res.status(405).json({ messege: 'Method Not Allow' })
            break;
    }


}
export default hanlder;



async function forpost(req, res) {

    try {
        //destractite the pass the data from the frontend
        const { peaple, messege, numarray } = req.body;


        //bd connected
        connectDb();

        async function forgardient(uid) {

            const sdata = await Student.find();

            const fdata = uid.map((item, index) => {
                const singledata = sdata.filter((data) => {
                    return item == data.customid;
                })
                return singledata;
            })
            const phone = [];
            const phoneNumber = fdata.map((item, index) => {
                const corospondingnumber = item[0].familyCall;
                phone.push(corospondingnumber);
            })
            const finalNumber = phone.toString();
            return finalNumber;

        }


        async function foremployee(uid) {

            const sdata = await Employee.find();

            const fdata = uid.map((item, index) => {
                const singledata = sdata.filter((data) => {
                    return item == data.customid;
                })
                return singledata;
            })

            const phone = [];
            const phoneNumber = fdata.map((item, index) => {
                const corospondingnumber = item[0].phone;
                phone.push(corospondingnumber);
            })
            const finalNumber = phone.toString();
            return finalNumber;

        }


        //check the user whome want to send sms gardiain or others
        const newNumbers = peaple == 1 ? await forgardient(numarray) : await foremployee(numarray);




        //send the data in bulk sms provider server
        const post = await smspost(messege, newNumbers);

        if (post.status != "Failed") {
            res.status(201).json({
                success: true,
                sms: post,
            });
        } else {
            res.status(500).json({
                success: false,
                error: "please Enter valid Student Id",
            });
        }




    } catch (err) {
        console.error("An error occurred:", err);
        // Other server-side error
        res.status(500).json({
            success: false,
            error: "There was a server-side problem",
        });

    }
}
