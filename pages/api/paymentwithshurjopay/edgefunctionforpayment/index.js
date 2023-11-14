import { NextResponse } from "next/server";


export const config = {
    runtime: "experimental-edge",
}



export default async function handler(req) {



    const { customid, fName, lName, wadmit, psDistrict, psVillage, psUnion, psUpazila, familyCall, psPost, title, month, corrospendingBalance, clientOrderID } = await req.json();


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
                amount: corrospendingBalance,
                order_id: clientOrderID,
                currency: "BDT",
                customer_name: `${fName} ${lName}`,
                customer_address: `${psVillage},${psUnion},${psUpazila},${psDistrict} `,
                client_ip: clientIPAddress,
                customer_phone: familyCall,
                customer_city: psDistrict,
                customer_post_code: psPost,
                value1: title,
                value2: month,
                value3: customid,
                value4: wadmit


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
