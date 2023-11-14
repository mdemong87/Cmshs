import { NextResponse } from "next/server";


export const config = {
    runtime: "experimental-edge",
}



export default async function handler(req) {
    try {



        const { clientOrderID, customid, fName, familyCall, lName, wadmit, month, psDistrict, title, psPost, psUnion, psUpazila, psVillage } = await req.json();


        const alldata = { clientOrderID, customid, fName, familyCall, lName, wadmit, month, psDistrict, title, psPost, psUnion, psUpazila, psVillage };



        const ganarate_token = await fetch('https://engine.shurjopayment.com/api/get_token', {
            method: "post",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({ username: "ChandashMokhdumShahHighSchool", password: "chan3ey8@mzayzss" })
        });


        const responses = await ganarate_token.json();




        // defind credential in a variable
        const SP_ENDPOINT = process.env.NEXT_PUBLIC_SP_ENDPOINT;
        const SP_USERNAME = process.env.NEXT_PUBLIC_SP_USERNAME;
        const SP_PASSWORD = process.env.NEXT_PUBLIC_SP_PASSWORD;
        const SP_PREFIX = process.env.NEXT_PUBLIC_SP_PREFIX;
        const SP_RETURN_URL = process.env.NEXT_PUBLIC_SP_RETURN_URL;
        const clientIPAddress = "102.324.0.5";



        const initiate_payment = await fetch(responses.execute_url, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({
                token: `${responses.token}`,
                username: SP_USERNAME,
                password: SP_PASSWORD,
                prefix: "CMS",
                return_url: SP_RETURN_URL,
                cancel_url: SP_RETURN_URL,
                customer_email: "mdemonformal@gmail.com",
                store_id: `${responses.store_id}`,
                amount: '1',
                order_id: "GDFGDFGTGDFRGFD",
                currency: "BDT",
                customer_name: "emon",
                customer_address: "konabari",
                client_ip: clientIPAddress,
                customer_phone: "01986404434",
                customer_city: "gazipur",
                customer_post_code: "sahashowr",
                value1: "payment",
                value2: "payment",
                value3: "payment",
                value4: "payment"


            })
        });

        const paymentInitiate_response = await initiate_payment.json();








        return NextResponse.json({
            messge: 'This is edge function',
            success: true,
            data: paymentInitiate_response
        }, {
            status: 200
        })

    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
