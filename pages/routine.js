import React, { useState } from 'react';
import Container from "../componnent/Container";
import Meta from "../componnent/Meta";
import RoutingTable from '../componnent/RoutingTable';
import styles from "../styles/routine.module.css";

export default function Routine({ data, error }) {
    const datas = data?.routing;

    const [tabInctregateer, settabInctregateer] = useState(true);


    //class routing filter
    const classRouting = datas.filter((item) => {
        return item.catagory == "Class Routing";
    });

    //exam routing filter
    const examRouting = datas.filter((item) => {
        return item.catagory == "Exam Routing";
    });

    //exam and class routing sorting by the classes number
    const sortedClassRouting = classRouting.sort((a, b) => a.classNumber - b.classNumber);
    const sortedExamRouting = examRouting.sort((a, b) => a.classNumber - b.classNumber);

    return (
        <main>
            <Meta title="Routine || Chandash Mokhdum Shah High School" />
            <Container>
                <div className={styles.container}>
                    <h1 style={{
                        textAlign: "center",
                        padding: "10px 0px"
                    }}>All Routines</h1>
                    <div className={styles.routingWrp}>
                        <div className={styles.btnWrp}>
                            <button onClick={() => settabInctregateer(true)} className={tabInctregateer ? styles.activebtn : null}>Class Routine</button>
                            <button onClick={() => settabInctregateer(false)} className={!tabInctregateer ? styles.activebtn : null}>Exam Routine</button>
                        </div>
                        <div>
                            {
                                tabInctregateer ? <RoutingTable data={sortedClassRouting} /> : <RoutingTable data={sortedExamRouting} />
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/routing`);

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
