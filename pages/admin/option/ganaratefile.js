import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "../../../componnent/Admin/Layout";
import admiteCard from "../../../helper/jspdf/admiteCard";
import idCard from "../../../helper/jspdf/idCard";
import testimonial from "../../../helper/jspdf/testimonial";
import styles from "../../../styles/Admin/option/ganaratefile.module.css";


export default function GanarateFile({ data }) {

    const [sidforadmitecard, setsidforadmitecard] = useState('');
    const [sidforidcard, setsidforidcard] = useState('');
    const [sidfortestimonial, setsidfortestimonial] = useState('');




    function handleadmiteCard() {

        if (sidforadmitecard != '') {
            const corospendingData = data.filter((item) => {
                return item.customid == sidforidcard;
            })


            admiteCard(corospendingData);
        } else {
            toast.warn("Select Student ID & Exam Type");
        }
    }


    function handletestimonial() {

        if (sidfortestimonial != '') {

            const corospendingData = data.filter((item) => {
                return item.customid == sidforidcard;
            })


            testimonial();
            toast.info("Testimonial Download Started");

        } else {
            toast.warn("Selete Student ID");
        }
    }


    function handleidCard() {

        if (sidforidcard != '') {
            const corospendingData = data.filter((item) => {
                return item.customid == sidforidcard;
            })


            console.log("gdfsgsdfg############");
            idCard(corospendingData);
            toast.info("ID Card Download Started");
        } else {
            toast.warn("Selete Student ID");
        }
    }


    return (
        <div className={styles.fileGanaratorWrp}>


            {/* testimonials ganarator componnent here */}
            <div className={styles.testimonialWrp}>
                <div className={styles.header}>
                    <h2>Testimonial Ganarator</h2>
                    <select onChange={(e) => setsidfortestimonial(e.target.value)}>
                        <option value={''}>Select Student ID</option>
                        {
                            data?.map((item, index) => {
                                return (
                                    <option key={index} value={item.customid}>{item.customid}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <button className={styles.testimonialBtn} onClick={() => handletestimonial()}>Ganarate Testimonial</button>
            </div>














            {/* student id card ganarator componnent here */}
            <div className={styles.testimonialWrp}>
                <div className={styles.header}>
                    <h2>Student ID Card Ganarator</h2>
                    <select onChange={(e) => setsidforidcard(e.target.value)}>
                        <option value={''}>Select Student ID</option>
                        {
                            data?.map((item, index) => {
                                return (
                                    <option key={index} value={item.customid}>{item.customid}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <button className={styles.testimonialBtn} onClick={() => handleidCard()}>Ganarate ID Card</button>
            </div>






            {/* amdite card ganarator componnent here */}
            <div className={styles.testimonialWrp}>
                <div className={styles.header}>
                    <h2>Admite Card Ganarator</h2>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <select>
                            <option value={''}>Exam Type</option>
                            <option value={"1st-Semester"}>1st Semester</option>
                            <option value={"2nd-Semester"}>2nd Semester</option>
                            <option value={"3rd-Semester"}>3rd Semester</option>
                            <option value={"Half-Year-Exam"}>Half Year Exam</option>
                            <option value={"Pre-Test"}>Pre test</option>
                            <option value={"Test"}>Test</option>
                            <option value={"Final"}>Final</option>
                            <option value={"January"}>Monthly January</option>
                            <option value={"February"}>Monthly February</option>
                            <option value={"March"}>Monthly March</option>
                            <option value={"April"}>Monthly April</option>
                            <option value={"May"}>Monthly May</option>
                            <option value={"June"}>Monthly June</option>
                            <option value={"Jully"}>Monthly Jully</option>
                            <option value={"Aguest"}>Monthly Aguest</option>
                            <option value={"September"}>Monthly September</option>
                            <option value={"October"}>Monthly October</option>
                            <option value={"November"}>Monthly November</option>
                            <option value={"December"}>Monthly December</option>
                        </select>
                        <select>
                            <option value={''}>Select Student ID</option>
                            {
                                data?.map((item, index) => {
                                    return (
                                        <option key={index} value={item.customid}>{item.customid}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className={styles.inputerWrp}>

                </div>
                <button className={styles.testimonialBtn} onClick={() => handleadmiteCard()}>Ganarate Admite Card</button>

            </div>





            <ToastContainer position="bottom-left" />

        </div>
    )
}



GanarateFile.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}


export async function getStaticProps() {
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
