import { useState } from "react";
import Layout from "../../../componnent/Admin/Layout";
import Payment from "../../../componnent/Admin/Payment";
import styles from "../../../styles/Admin/Payments.module.css";

export default function Payments() {

    const [idField, setidFiled] = useState('');
    const [respon, setrespon] = useState('');
    const [total, settotal] = useState(0);


    async function handlekeyDown(e) {
        if (e.key === "Enter") {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/students/payment/${idField}`);
            const responed = await res.json();
            setrespon(responed);
        }
    }



    return (
        <div className={styles.paymentsWrp}>
            <div className={styles.tableHeader}>
                <h1>Make Payment to Student</h1>
                <input onKeyDown={(e) => handlekeyDown(e)} onChange={(e) => setidFiled(e.target.value)} placeholder="Search" className={styles.input} type='search' />
            </div>

            <Payment data={respon} settotal={settotal} />

            <div className={styles.paymentBtn}>
                <div>
                    <button className={styles.makePayemtn}>Make Payment</button>
                </div>
                <div className={styles.filed}>
                    Total = {total}
                </div>
            </div>
        </div>
    )
}

Payments.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}