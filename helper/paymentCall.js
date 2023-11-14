

async function paymentCall(data) {


    const { clientOrderID, customid, fName, familyCall, lName, wadmit, month, psDistrict, title, psPost, psUnion, psUpazila, psVillage } = data;

    const res = await fetch("/api/edge", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify({ clientOrderID, customid, fName, familyCall, lName, wadmit, month, psDistrict, title, psPost, psUnion, psUpazila, psVillage })
    });

    const resposns = await res.json();
    return resposns;
}

export default paymentCall