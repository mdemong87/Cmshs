import { useState } from "react";
import PaymentInput from "./PaymentInput";

export default function paymentInputWrp({ add, settotal }) {

    const [totalTracker, settotalTracker] = useState('');

    const item = [];
    const total = [];
    const length = item.length;
    for (var i = 0; i < add; i++) {
        item.push(<PaymentInput sId={add} />)
        settotal(i + 1);

    }



    return (
        <div>{item}</div>
    )
}
