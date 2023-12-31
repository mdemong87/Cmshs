import { useState } from "react";
import Layout from "../../../componnent/Admin/Layout";
import PandingTable from "../../../componnent/Admin/PandingTable";
import Loding from "../../../componnent/Loding";
import styles from "../../../styles/Admin/Allstudents.module.css";



export default function PaddingStudents({ data, error }) {


    const [loading, setloading] = useState(false);
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
            {loading && <Loding />}
            <div className={styles.tableHeader}>

                <h1> Padding Students</h1>
                <input onKeyUp={(e) => setstudentId(e.target.value)} placeholder="Search" className={styles.input} type='search' />
            </div>
            <PandingTable Data={filter} error={error} loading={loading} setloading={setloading} />
        </div>
    )
}


PaddingStudents.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}






export async function getServerSideProps(context) {
    try {


        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/students/panding`);

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


