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


//create make payment function and export it for uses from otherwhere
export async function makingpayment(alldata) {

    const { customid, fName, lName, wadmit, psDistrict, psVillage, psUnion, psUpazila, familyCall, psPost, title, month, corrospendingBalance, clientOrderID } = alldata;

    return new Promise((resolve, reject) => {
        shurjopay.makePayment(
            {
                "amount": corrospendingBalance,
                "order_id": clientOrderID, // You might want to generate a unique order_id
                "currency": "BDT",
                "customer_name": fName + " " + lName,
                "customer_address": `${psVillage},${psUnion},${psUpazila},${psDistrict} `,
                "client_ip": "102.324.0.5",
                "customer_phone": familyCall,
                "customer_city": psDistrict,
                "customer_post_code": psPost,
                "value1": title,
                "value2": month,
                "value3": customid,
                "value4": wadmit
            },
            (response_data) => {
                // TODO Handle response from shurjopay and update your system
                resolve(response_data);

                console.log(response_data);
            },
            (error) => {
                // TODO Handle error response
                console.log(error);
                reject(error);
            }
        );
    });

}





//create make payment function and export it for uses from otherwhere
export async function varifyingpayment(order_id) {

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