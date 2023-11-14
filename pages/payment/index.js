import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from "../../componnent/Container";
import Loding from "../../componnent/Loding";
import Meta from "../../componnent/Meta";
import paymentCall from '../../helper/paymentCall';
import paymentImage from "../../public/payments.jpg";
import styles from "../../styles/payment/payment.module.css";

export default function Payment() {

    const router = useRouter();
    const [isloading, setisloading] = useState(false);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [calas, setCalas] = useState("");
    const [title, setTitle] = useState("");
    const [month, setmonth] = useState("0");

    async function hanldeCheckout() {



        if (id != "" && name != "" && number != "" && calas != "" && title != "") {

            if (title == "Monthly" || title == "Exam") {
                if (month != "0") {


                    setisloading(true);

                    const res = await fetch("/api/paymentwithshurjopay", {
                        method: "POST",
                        headers: {
                            "content-Type": "application/json",
                        },
                        body: JSON.stringify({ id, name, number, calas, title, month })
                    });

                    const resposns = await res.json();


                    if (resposns.success) {
                        const paymentcallresponse = await paymentCall(resposns.res);
                        setisloading(false);
                        if (paymentcallresponse.success) {
                            const url = paymentcallresponse.data.checkout_url;
                            window.location.href = url;

                        } else {
                            toast.warn(resposns.error);
                        }
                    } else {
                        toast.warn(resposns.error);
                    }


                } else {
                    toast.warn("Please! Enter all required filed")
                }
            } else {


                setisloading(true);
                const res = await fetch("/api/paymentwithshurjopay", {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json",
                    },
                    body: JSON.stringify({ id, name, number, calas, title, month })
                });

                const resposns = await res.json();


                if (resposns.success) {
                    const paymentcallresponse = await paymentCall(resposns.res);
                    setisloading(false);
                    if (paymentcallresponse.success) {

                        const url = paymentcallresponse.data.checkout_url;
                        window.location.href = url;

                    } else {
                        toast.warn(resposns.error);
                    }
                } else {
                    toast.warn(resposns.error);
                }
            }


        } else {
            toast.warn("Please! Enter all required filed")
        }



    }


    return (
        <main>
            <ToastContainer position="top-center" />
            <Meta title="Payment" name="payment" content='payment' />
            <Container>
                <div className={styles.paymentWrp}>
                    {isloading && <Loding />}
                    <div>
                        <Image src={paymentImage} alt='payment-image' width={500} height={500} />
                    </div>
                    <div className={styles.paymentInputWrp}>
                        <h1 style={{
                            textAlign: "center",
                            padding: "6px 0px",
                            color: 'rgb(65, 65, 65)'
                        }}>Make Payment</h1>
                        <input value={id} onChange={(e) => setId(e.target.value)} type='text' placeholder='Student ID *' />
                        <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Student Name *' />
                        <input value={number} onChange={(e) => setNumber(e.target.value)} type='number' placeholder='Number *' />
                        <select onChange={(e) => setCalas(e.target.value)}>
                            <option value={" "}>Class *</option>
                            <option value={"1"}>1</option>
                            <option value={"2"}>2</option>
                            <option value={"3"}>3</option>
                            <option value={"4"}>4</option>
                            <option value={"5"}>5</option>
                            <option value={"6"}>6</option>
                            <option value={"7"}>7</option>
                            <option value={"8"}>8</option>
                            <option value={"9"}>9</option>
                            <option value={"10"}>10</option>
                        </select>
                        <select onChange={(e) => setTitle(e.target.value)}>
                            <option value={""}>Payment Title *</option>
                            <option value="Monthly">Monthly Fee</option>
                            <option value="Exam">Exam Fee</option>
                            <option value="Section">Section Fee</option>
                            <option value="Course">Course Fee</option>
                            <option value="Registrations">Registration Fee</option>
                            <option value="Markshit">MarkShirt Fee</option>
                            <option value="Testimonial">Tastimonial Fee</option>
                            <option value="DepartmentChange">Deparment Change Fee</option>
                            <option value="Admission">Admission Fee</option>
                            <option value=" AdmissionFrom">Admission Form Fee</option>
                            <option value=" Others">Others Fee</option>
                            <option value="OralExam">Oral Exam Fee</option>
                            <option value="Central">Central Fee</option>
                            <option value="InternalSports">Intarnal Sports Fee</option>
                            <option value="NationalSports">National Sports Fee</option>
                            <option value="commonRoom">Common Room Fee</option>
                            <option value="Magagin">Magagin Fee</option>
                            <option value="InstituteDepartment">Institute Development Fee</option>
                            <option value="Library">Library Fee</option>
                            <option value="Labratory">Labratory Fee</option>
                            <option value="Fine">Fine</option>
                            <option value="utility">Electicity/Water/Gas</option>
                            <option value="WelcomeFree">New Student Welcome Fee</option>
                            <option value="EducationlTravel">Educational Travel Fee</option>
                            <option value="Delay">Delay Fine</option>
                        </select>
                        {
                            title == "Monthly" ? <select onChange={(e) => setmonth(e.target.value)}>
                                <option value={"0"}>Months *</option>
                                <option value={"January"}>January</option>
                                <option value={"February"}>February</option>
                                <option value={"March"}>March</option>
                                <option value={"April"}>April</option>
                                <option value={"May"}>May</option>
                                <option value={"June"}>June</option>
                                <option value={"Jully"}>Jully</option>
                                <option value={"Aguest"}>Aguest</option>
                                <option value={"September"}>September</option>
                                <option value={"October"}>October</option>
                                <option value={"November"}>November</option>
                                <option value={"December"}>December</option>
                            </select> : title == "Exam" ? <select onChange={(e) => setmonth(e.target.value)}>
                                <option value={"0"}>Exam type *</option>

                                <option value={"1st-Semester"}>1st Semester</option>
                                <option value={"2nd-Semester"}>2nd Semester</option>
                                <option value={"3rd-Semester"}>3rd Semester</option>
                                <option value={"half-year-exam"}>Half Year Exam</option>
                                <option value={"Pre-test"}>Pre test</option>
                                <option value={"test"}>Test</option>
                                <option value={"final"}>Final</option>
                                <option value={"January"}>January Monthly Test</option>
                                <option value={"February"}>February Monthly Test</option>
                                <option value={"March"}>March Monthly Test</option>
                                <option value={"April"}>April Monthly Test</option>
                                <option value={"May"}>May Monthly Test</option>
                                <option value={"June"}>June Monthly Test</option>
                                <option value={"Jully"}>Jully Monthly Test</option>
                                <option value={"Aguest"}>Aguest Monthly Test</option>
                                <option value={"September"}>September Monthly Test</option>
                                <option value={"October"}>October Monthly Test</option>
                                <option value={"November"}>November Monthly Test</option>
                                <option value={"December"}>December Monthly Test</option>
                            </select> : null
                        }
                        <button onClick={() => { hanldeCheckout() }}>Payment</button>
                    </div>
                </div>
            </Container >
        </main >
    )
}
