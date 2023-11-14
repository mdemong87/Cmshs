
async function postsms(sms, number) {

    try {

        const res = await fetch(process.env.NEXT_PUBLIC_BULK_URL, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({
                "customer_id": process.env.NEXT_PUBLIC_BULK_CUSTOMER_ID,
                "api_key": process.env.NEXT_PUBLIC_BULK_API_KEY,
                "message": sms,
                "mobile_no": number
            })
        });
        const resposns = await res.json();
        return resposns;

    } catch (error) {
        return error;
    }

}



export default postsms;