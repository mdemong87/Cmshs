import { paymentSystemDeleter, paymentSystemUpdateWhenThePaymentIsComplate } from "../../../helper/paymentsystemUpdater&Deleter";
import { varifyingpayment } from "../../../helper/shurjopayconfig";



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
        //distructure and difind in a one variable from data which is pass from the front end
        const { order_id } = req.query;

        // console.log("fasdgsdgsdfrgsdfg" + order_id);

        //varifying payment
        varifyingpayment(order_id)
            .then((res_data) => {

                if (res_data[0].sp_code == 1000) {


                    const isupdate = paymentSystemUpdateWhenThePaymentIsComplate(res_data[0].order_id, true);

                    if (isupdate) {
                        res.status(200).json({
                            success: true,
                            res: res_data,
                        });
                    }

                } else {

                    //delete existing racord for payment failed
                    paymentSystemDeleter(res_data[0].order_id)

                    //faild response
                    res.status(500).json({
                        success: false,
                        error: "Payment was failed",
                    });
                }

            })
            .catch((error) => {
                // Handle any errors that occurred during payment initiation
                res.status(500).json({
                    success: false,
                    error: "Payment was failed",
                });
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
