import { useState } from "react";
import AllstTable from "../../../componnent/Admin/AllstTable";
import Layout from "../../../componnent/Admin/Layout";
import Meta from "../../../componnent/Meta";
import styles from "../../../styles/Admin/Allstudents.module.css";


export default function Allstudents({ data, error }) {

    const [studentId, setstudentId] = useState('');




    // search functionality
    var filter = [];
    for (let i = 0; i < data.length; i++) {

        // check if the search text match the system or not
        if (data[i].customid.indexOf(studentId) > -1) {
            filter.push(data[i]);
        }
    }







    return (

        <div className={styles.Swrp}>
            <Meta title="Admin" name="Admin" content='Admin' />
            <div className={styles.tableHeader}>
                <h1> All Students</h1>
                <input onKeyUp={(e) => setstudentId(e.target.value)} placeholder="Search" className={styles.input} type='search' />
            </div>
            <AllstTable data={filter} error={error} />
        </div>
    )
}


Allstudents.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}

export async function getServerSideProps(context) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/students`);
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
