import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Container from "../../componnent/Container";
import Meta from "../../componnent/Meta";
import styles from "../../styles/library/library.module.css";



export default function Index({ data }) {

    const datas = data?.library;


    const [filterValue, setfilterValue] = useState(" ");

    //filtering data with the user input
    const filteringData = datas?.filter((item) => {
        if (filterValue != " ") {
            return item.catagory == filterValue;
        } else {
            return datas;
        }
    });



    return (
        <main>
            <Meta title="Library" name="library" content='library' />
            <Container>
                <div className={styles.container}>
                    <div>
                        <div className={styles.headerWrp}>
                            <h1>Library</h1>
                            <select onChange={(e) => setfilterValue(e.target.value)}>
                                <option value={" "}>Select Book Type</option>
                                <option value={"Refarence book"}>Refarence book</option>
                                <option value={"Text book"}>Text book</option>
                                <option value={"Children book"}>Children book</option>
                                <option value={"Story book"}>Story book</option>
                                <option value={"Fiction book"}>Fiction book</option>
                                <option value={"others"}>Others</option>
                            </select>
                        </div>
                        <div className={styles.dataWrp}>
                            {
                                filteringData?.map((item, index) => {
                                    return <div key={index}>
                                        <Link className={styles.dataLink} href={`/library/${item._id}`}>
                                            <Image className={styles.bookImage} width={500} height={500} src={item.thumnals.secure_url} alt={"Book Thumnal"} />
                                        </Link>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </main >
    )
}




export async function getStaticProps() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/library`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return {
            props: { data }, // will be passed to the page component as props
            revalidate: 60
        }

    } catch (error) {
        // Handle the error
        console.error("An error occurred:", error);
        // You can return an error page or an error message here if needed
        return {
            props: { error: "An error occurred while fetching data" },
        };
    }


}




