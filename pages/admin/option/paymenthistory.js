import { useState } from "react";
import Layout from "../../../componnent/Admin/Layout";
import localdate from "../../../helper/localdateConvartet";
import styles from "../../../styles/Admin/option/paymenthistory.module.css";

export default function PaymentHistory({ data }) {


    const [studentId, setstudentId] = useState("");


    // search functionality
    var filter = [];
    for (let i = 0; i < data.paymenthistory.length; i++) {

        // check if the search text match the system or not
        if (data.paymenthistory[i].uid.indexOf(studentId) > -1) {
            filter.push(data.paymenthistory[i]);
        }
    }




    return (
        <div className={styles.PaymentHistoryWrp}>

            <div className={styles.headignWrp}>
                <h1>Payment History</h1>
                <input onKeyUp={(e) => setstudentId(e.target.value)} type='number' placeholder='Find History By ID' />
            </div>

            {/* history table from here */}
            <div className={styles.tableWrp}>
                <table border={1} className={styles.table}>
                    <thead>
                        <tr>
                            <td>Sl</td>
                            <td>ID</td>
                            <td>Order ID</td>
                            <td>Name</td>
                            <td>Class</td>
                            <td>Payment Title</td>
                            <td>Amount</td>
                            <td>Date</td>
                            <td>Payment With</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filter.map((item, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.uid}</td>
                                    <td>{item.order_id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.calas}</td>
                                    <td>{item.pType == null ? `${item.pTitle}` : `${item.pTitle} (${item.pType == "0" ? "Fee" : item.pType})`}</td>
                                    <td>{Math.ceil(item.amount)}</td>
                                    <td>{localdate(item)}</td>
                                    <td>{item.option}</td>
                                    <td>
                                        <span className={`${styles.statusHighlighter} ${item.status ? styles.paid : styles.unpaid}`}>{item.status ? "Paid" : "Unpaid"}</span>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>



        </div>
    )
}



PaymentHistory.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}


export async function getServerSideProps() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/paymenthistory`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        return {
            props: { data }, // will be passed to the page component as props
        };
    } catch (error) {
        // Handle the error
        console.error("An error occurred:", error);

        // You can return an error page or an error message here if needed
        return {
            props: { error: "An error occurred while fetching data" },
        };
    }
}
