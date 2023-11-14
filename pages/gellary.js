import Image from 'next/image';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from "../componnent/Container";
import Meta from "../componnent/Meta";
import one from "../public/1.jpg";
import ten from "../public/10.jpg";
import two from "../public/2.jpg";
import three from "../public/3.jpg";
import four from "../public/4.jpg";
import five from "../public/5.jpg";
import six from "../public/6.jpg";
import seven from "../public/7.jpg";
import eight from "../public/8.jpg";
import nine from "../public/9.jpg";
import styles from "../styles/gellary.module.css";


export default function Gellary() {

    const image = [one, two, three, four, five, six, seven, eight, nine, ten];
    const [tabInctregateer, settabInctregateer] = useState(true);


    return (
        <main>
            <Meta title="Gellary" name="gellary" content='gellary' />
            <ToastContainer position="top-center" />
            <Container>
                <div className={styles.container}>
                    <h1 style={{
                        textAlign: "center",
                        padding: "10px 0px"
                    }}>All Gellarys</h1>
                    <div className={styles.btnWrp}>
                        <button onClick={() => settabInctregateer(true)} className={tabInctregateer ? styles.activebtn : null}>Photo Gellary</button>
                        <button onClick={() => toast.info("Vedio Gellary is Under Developing!")} className={!tabInctregateer ? styles.activebtn : null}>Vedio Gellary</button>
                    </div>
                    <div className={styles.gellaryPhotoWrp}>

                        {
                            image.map((item, index) => {
                                return <Image key={index} className={`${index == 0 ? styles.photo : index == 1 ? styles.photo : index == 5 ? styles.verphoto : index == 2 ? styles.bigphoto : index == 7 ? styles.bigphoto : index == 3 ? styles.verphoto : index == 4 ? styles.photo : index == 6 ? styles.verphoto : index == 8 ? styles.verphoto : index == 9 ? styles.photo : null
                                    }`} src={item} alt='gellary-photo' width={400} height={400} />
                            })
                        }


                    </div>
                </div>
            </Container>
        </main >
    )
}





// export async function getStaticProps() {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL} / api / systems / gallerys`);

//         if (!res.ok) {
//             throw new Error(`HTTP error! Status: ${res.status}`);
//         }

//         const data = await res.json();

//         return {
//             props: { data }, // will be passed to the page component as props
//             revalidate: 60
//         };
//     } catch (error) {
//         // Handle the error
//         console.error("An error occurred:", error);

//         // You can return an error page or an error message here if needed
//         return {
//             props: { error: "An error occurred while fetching data" },
//         };
//     }
// }
