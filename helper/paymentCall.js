

async function paymentCall(data) {


    const { customid, fName, lName, wadmit, psDistrict, psVillage, psUnion, psUpazila, familyCall, psPost, title, month, corrospendingBalance, clientOrderID } = data;

    const res = await fetch("/api/paymentwithshurjopay/edgefunctionforpayment", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify({ customid, fName, lName, wadmit, psDistrict, psVillage, psUnion, psUpazila, familyCall, psPost, title, month, corrospendingBalance, clientOrderID })
    });

    const resposns = await res.json();
    return resposns;
}

export default paymentCall;