import { varifyingpayment } from "../../../helper/shurjopayconfig";
// import paymentSystemUpdater from "../../../helper/paymentSystemUpdater";



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


        //varifying payment
        varifyingpayment(order_id)
            .then((res_data) => {

                console.log(res_data);

                if (res_data[0].sp_code == 1000) {


                    // const dataobject = {
                    //     uid: id,
                    //     name: `${fName} ${lName}`,
                    //     fName: faterName,
                    //     pTitle: title,
                    //     pType: month || null,
                    //     amount: corrospendingBalance,
                    //     option: "Online",
                    //     status: false,
                    //     order_id: paymentInitiate_response.sp_order_id
                    // };


                    // const system_res = await paymentSystemUpdater(dataobject);

                    // if (system_res) {


                    //     return NextResponse.json({
                    //         messge: 'Payment Initiate Successfully',
                    //         success: true,
                    //         data: paymentInitiate_response
                    //     }, {
                    //         status: 200
                    //     })

                    // } else {
                    //     return NextResponse.json({
                    //         success: false,
                    //         error: "There Was a Server Side Problem"
                    //     }, {
                    //         status: 500
                    //     })

                    // }

                    if (isupdate) {
                        res.status(200).json({
                            success: true,
                            res: res_data,
                        });
                    }

                } else {
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
