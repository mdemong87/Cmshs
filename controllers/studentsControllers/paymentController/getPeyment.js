import { Student } from "../../../mongoDB/models/models";

export default async function getPayment(req, res) {

    const { id } = req.query;

    await Student.find({ customid: id }, (err, data) => {
        if (!err) {
            // assign var require data
            const _id = data[0]._id;
            const customid = data[0].customid;
            const fName = data[0].fName;
            const fatherName = data[0].faterName;
            const wadmit = data[0].wadmit;
            const Paymentstatus = data[0].Paymentstatus;

            //default paymentdata that will be change abe
            const paymentAble = 5000;


            const due = paymentAble - Paymentstatus;




            //passable data
            const passdata = {
                _id,
                customid,
                fName,
                fatherName,
                wadmit,
                due
            }

            res.status(200).json(passdata);
        } else {
            res.status(500).json({ error: "There was a server side problem" });
        }
    }).clone();
}
