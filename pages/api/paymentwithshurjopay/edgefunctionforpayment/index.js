import { NextResponse } from "next/server";
import arrayToString from "../../../../helper/arrayTostring";


export const config = {
    runtime: "experimental-edge",
}



export default async function handler(req) {



    const { customid, fName, lName, wadmit, psDistrict, psVillage, psUnion, psUpazila, familyCall, psPost, PaymentTitle, monthName, exam, paymentBalance, clientOrderID } = await req.json();


    // const paymentTitleStringValue = arrayToString(PaymentTitle);
    const monthNameStringValue = arrayToString(monthName);
    const paymentBalanceStringvcalue = arrayToString(paymentBalance);


    //find the corrospending blance here
    let corrospendingBalance = 0;
    for (const key in paymentBalance[0]) {
        if (typeof paymentBalance[0][key] === 'number') {


            if (key == "Monthly") {
                const monthNameLength = monthName.length;
                corrospendingBalance += paymentBalance[0][key] * monthNameLength;

            } else {
                corrospendingBalance += paymentBalance[0][key];
            }

        }
    }


    // defind credential in a variable
    const SP_ENDPOINT = process.env.NEXT_PUBLIC_SP_ENDPOINT;
    const SP_USERNAME = process.env.NEXT_PUBLIC_SP_USERNAME;
    const SP_PASSWORD = process.env.NEXT_PUBLIC_SP_PASSWORD;
    const SP_PREFIX = process.env.NEXT_PUBLIC_SP_PREFIX;
    const SP_RETURN_URL = process.env.NEXT_PUBLIC_SP_RETURN_URL;
    const clientIPAddress = "102.324.0.5";


    try {


        //ganarate token for payment initialte
        const ganarate_token = await fetch(`${SP_ENDPOINT}/api/get_token`, {
            method: "post",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({ username: SP_USERNAME, password: SP_PASSWORD })
        });


        const responses = await ganarate_token.json();





        //initiate a payment with the ganarated token
        const initiate_payment = await fetch(responses.execute_url, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({
                token: `${responses.token}`,
                username: SP_USERNAME,
                password: SP_PASSWORD,
                prefix: SP_PREFIX,
                return_url: SP_RETURN_URL,
                cancel_url: SP_RETURN_URL,
                customer_email: "example@gmail.com",
                store_id: `${responses.store_id}`,
                amount: `${corrospendingBalance}`,
                order_id: clientOrderID,
                currency: "BDT",
                customer_name: `${fName} ${lName}`,
                customer_address: `${psVillage},${psUnion},${psUpazila},${psDistrict} `,
                client_ip: clientIPAddress,
                customer_phone: familyCall,
                customer_city: psDistrict,
                customer_post_code: psPost,
                value1: wadmit,
                value2: monthNameStringValue,
                value3: customid,
                value4: `${paymentBalanceStringvcalue}`,
            })
        });

        const paymentInitiate_response = await initiate_payment.json();



        //simple give the success response after the payment was initite
        return NextResponse.json({
            messge: 'Payment Initiate Successfully',
            success: true,
            data: paymentInitiate_response
        }, {
            status: 200
        })




    } catch (error) {


        //if there was an error give this error response
        return NextResponse.json({
            error: 'There was a server side problem',
            success: false
        },
            { status: 500 })
    }
}
