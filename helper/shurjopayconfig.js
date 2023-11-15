// import dependancess
import sp from "shurjopay";

//initial dependances
var shurjopay = sp();


// defind credential in a variable
const SP_ENDPOINT = process.env.NEXT_PUBLIC_SP_ENDPOINT;
const SP_USERNAME = process.env.NEXT_PUBLIC_SP_USERNAME;
const SP_PASSWORD = process.env.NEXT_PUBLIC_SP_PASSWORD;
const SP_PREFIX = process.env.NEXT_PUBLIC_SP_PREFIX;
const SP_RETURN_URL = process.env.NEXT_PUBLIC_SP_RETURN_URL;


//confifure shurjopay
shurjopay.config(
    SP_ENDPOINT,
    SP_USERNAME,
    SP_PASSWORD,
    SP_PREFIX,
    SP_RETURN_URL,
);





//create varify payment function and export it for uses from otherwhere
async function varifyingpayment(order_id) {

    return new Promise((resolve, reject) => {
        shurjopay.verifyPayment(order_id, (response_data) => {
            // TODO Handle response from shurjopay and update your system
            resolve(response_data);
        },
            (error) => {
                // TODO Handle error response
                console.log(error);
                reject(error);
            }
        );
    });
}

export default varifyingpayment;