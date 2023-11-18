import React, { useState } from 'react';
import Container from "../componnent/Container";
import EmployeeTable from "../componnent/EmployeeTable";
import Meta from "../componnent/Meta";
import styles from "../styles/exployee.module.css";

export default function Employee({ data, error }) {

    const datas = data?.employee;
    const [tabInctregateer, settabInctregateer] = useState(2);


    // filtering teaching position data
    const teacherData = datas.filter((item) => {
        return item.catagory == "Teacher";
    });

    //filtering commite position data
    const commiteData = datas.filter((item) => {
        return item.catagory == "commite";
    });

    //filtering staff position data
    const staffData = datas.filter((item) => {
        return item.catagory == "Staff";
    });

    //filtering staff position data
    const FounderData = datas.filter((item) => {
        return item.catagory == "Founder";
    });

    //filtering staff position data
    const headMasterData = datas.filter((item) => {
        return item.catagory == "Teacher" && item.position == "Head Master";
    });


    return (
        <main>
            <Meta title="Employee || Chandash Mokhdum Shah High School" />
            <Container>
                <div className={styles.container}>
                    <h1 style={{
                        textAlign: "center",
                        padding: "10px 0px"
                    }}>All Employees</h1>
                    <div className={styles.routingWrp}>
                        <div className={styles.btnWrp}>
                            <button onClick={() => settabInctregateer(1)} className={tabInctregateer == 1 ? styles.activebtn : null}>Commite</button>
                            <button onClick={() => settabInctregateer(2)} className={tabInctregateer == 2 ? styles.activebtn : null}>Teacher</button>
                            <button onClick={() => settabInctregateer(5)} className={tabInctregateer == 5 ? styles.activebtn : null}>Headmaster</button>
                            <button onClick={() => settabInctregateer(3)} className={tabInctregateer == 3 ? styles.activebtn : null}>Staff</button>
                            <button onClick={() => settabInctregateer(4)} className={tabInctregateer == 4 ? styles.activebtn : null}>Founder</button>
                        </div>
                        <div>
                            {

                                tabInctregateer == 1 ? < EmployeeTable data={commiteData} /> : tabInctregateer == 2 ? <EmployeeTable data={teacherData} /> : tabInctregateer == 3 ? <EmployeeTable data={staffData} /> : tabInctregateer == 4 ? <EmployeeTable data={FounderData} /> : <EmployeeTable data={headMasterData} />

                            }

                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}




export async function getStaticProps() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/employee`);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        return {
            props: { data }, // will be passed to the page component as props
            revalidate: 60
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
