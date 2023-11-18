import Image from 'next/image';
import React from 'react';
import { MdDownload } from "react-icons/md";
import Container from "../../componnent/Container";
import Meta from "../../componnent/Meta";
import styles from "../../styles/library/library.module.css";


export default function SingleLibrary({ data }) {


    return (
        <main>
            <Meta title="Library Book || Chandash Mokhdum Shah High School" />
            <Container>
                <div className={styles.containersingle}>
                    <div>
                        <div className={styles.signleBookWrp}>
                            <div className={styles.bookImgeWrp}>
                                <Image className={styles.singleimage} width={400} height={400} src={data.data.thumnals.secure_url} alt={"Book thumnal"} />
                            </div>
                            <div className={styles.bookDetailseWrp}>

                                <div>
                                    <span>
                                        <b>Name : </b>
                                        <span>{data.data.title}</span>
                                    </span>
                                </div>

                                <div>
                                    <span>
                                        <b>Author :</b>
                                        <span>{data.data.author}</span>
                                    </span>
                                </div>

                                <div>
                                    <span>
                                        <b>Publisher :</b>
                                        <span>{data.data.publisher}</span>
                                    </span>
                                </div>

                                <div>
                                    <span>
                                        <b>Class :</b>
                                        <span>{data.data?.classes}</span>
                                    </span>
                                </div>

                                <div>
                                    <span>
                                        <b>Catagory :</b>
                                        <span>{data.data.catagory}</span>
                                    </span>
                                </div>

                                <div>
                                    <span>
                                        <b>Language :</b>
                                        <span>{data.data.language}</span>
                                    </span>
                                </div>

                                <div>
                                    <span>
                                        <b>Subject :</b>
                                        <span>{data.data.subject}</span>
                                    </span>
                                </div>


                                <div>
                                    <a href={data.data.books.secure_url} download target='blank' className={styles.downloadBtn}>
                                        Download
                                        <MdDownload className={styles.downLoadIcon} />
                                    </a>
                                </div>


                            </div>
                        </div>
                        <div className={styles.bookDisWrp}>
                            <h2>Book Description</h2>
                            <p>{data.data.discription}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}






export async function getServerSideProps(context) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/library/${context.params.id}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return {
            props: { data }, // will be passed to the page component as props
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
