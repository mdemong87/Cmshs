import React from 'react';
import { FiDownload } from "react-icons/fi";
import Container from "../componnent/Container";
import Meta from "../componnent/Meta";
import lcldate from "../helper/localdateConvartet";
import styles from "../styles/sylabus.module.css";
export default function Sylabus({ data, error }) {
    const datas = data?.sylabus;
    const sortedESylabus = datas.sort((a, b) => a.classNumber - b.classNumber);


    return (
        <main>
            <Meta title="Sylebus || Chandash Mokhdum Shah High School" />
            <Container>
                <div className={styles.container}>
                    <h1 style={{
                        textAlign: "center",
                        padding: "10px 0px"
                    }}>All Sylabus</h1>
                    <div className={styles.routingWrp}>
                        <div>
                            <div className={styles.noticWrp}>
                                <div className={styles.heading}>
                                    <div>Sl</div>
                                    <div>Name</div>
                                    <div>Class</div>
                                    <div>Date</div>
                                    <div>Download</div>
                                </div>


                                {/* dynamic routing mapping here*/}

                                {
                                    sortedESylabus.map((item, index) => {
                                        return <div key={index} className={styles.body}>
                                            <div>{index + 1}</div>
                                            <div>{item.title}</div>
                                            <div>{item.classNumber}</div>
                                            <div>{lcldate(item)}</div>
                                            <div><a href={item.file.secure_url} download target="blank"><FiDownload className={styles.icons} /></a></div>
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}




export async function getStaticProps() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sylabus`);

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
