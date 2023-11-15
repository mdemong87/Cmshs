import paymentSystemUpdater from "../../../helper/paymentSystemUpdater";
import varifyingpayment from "../../../helper/shurjopayconfig";



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

                if (res_data[0].sp_code == 1000) {


                    //difind data as a object for update the system
                    const dataobject = {
                        uid: res_data[0].value3,
                        name: res_data[0].name,
                        pTitle: res_data[0].value1,
                        pType: res_data[0].value2 || null,
                        amount: res_data[0].amount,
                        option: "Online",
                        status: true,
                        order_id: res_data[0].order_id
                    };

                    //update the system when payment was complate
                    const system_res = paymentSystemUpdater(dataobject);

                    //check system was update or not
                    if (system_res) {

                        res.status(200).json({
                            messge: 'Payment Complate Successfully',
                            success: true,
                            res: res_data,
                        });

                    } else {

                        //faild response
                        res.status(500).json({
                            success: false,
                            error: "There Was a Server Side Problem"
                        });
                    }




                } else {
                    res.status(500).json({
                        success: false,
                        error: "There was a server-side problem",
                    });
                }



            })
            .catch((error) => {
                // Handle any errors that occurred during payment varification
                res.status(500).json({
                    success: false,
                    error: "There was a server-side problem",
                })
            })


    } catch (err) {
        res.status(500).json({
            success: false,
            error: "There was a server-side problem",
        });
    }
}