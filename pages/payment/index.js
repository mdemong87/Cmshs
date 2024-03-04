import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from "../../componnent/Container";
import Loding from "../../componnent/Loding";
import Meta from "../../componnent/Meta";
import paymentCall from "../../helper/paymentCall";
import paymentImage from "../../public/payments.jpg";
import styles from "../../styles/payment/payment.module.css";




export default function Payment() {

    const router = useRouter();
    const [isloading, setisloading] = useState(false);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [calas, setCalas] = useState("0");
    const [exam, setexam] = useState("0");
    // just multipul select
    const [selectedTitle, setselectedTitle] = useState([]);
    const [selectedMonth, setselectedMonth] = useState([]);


    //option for payment title
    const paymentOptions = [
        { value: 'Monthly', label: 'Monthly Fee' },
        { value: 'Exam', label: 'Exam Fee' },
        { value: 'Section', label: 'Section Fee' },
        { value: 'Course', label: 'Course Fee' },
        { value: 'Registrations', label: 'Registration Fee' },
        { value: 'Markshit', label: 'MarkShirt Fee' },
        { value: 'Testimonial', label: 'Testimonial Fee' },
        { value: 'DepartmentChange', label: 'Department Change Fee' },
        { value: 'Admission', label: 'Admission Fee' },
        { value: 'AdmissionFrom', label: 'Admission Form Fee' },
        { value: 'Others', label: 'Others Fee' },
        { value: 'OralExam', label: 'Oral Exam Fee' },
        { value: 'Central', label: 'Central Fee' },
        { value: 'InternalSports', label: 'Internal Sports Fee' },
        { value: 'NationalSports', label: 'National Sports Fee' },
        { value: 'commonRoom', label: 'Common Room Fee' },
        { value: 'Magagin', label: 'Magagin Fee' },
        { value: 'InstituteDepartment', label: 'Institute Development Fee' },
        { value: 'Library', label: 'Library Fee' },
        { value: 'Labratory', label: 'Labratory Fee' },
        { value: 'Fine', label: 'Fine' },
        { value: 'utility', label: 'Electricity/Water/Gas' },
        { value: 'WelcomeFree', label: 'New Student Welcome Fee' },
        { value: 'EducationlTravel', label: 'Educational Travel Fee' },
        { value: 'Delay', label: 'Delay Fine' }
    ];

    //option for month
    const monthOptions = [
        { value: 'January', label: 'January' },
        { value: 'February', label: 'February' },
        { value: 'March', label: 'March' },
        { value: 'April', label: 'April' },
        { value: 'May', label: 'May' },
        { value: 'June', label: 'June' },
        { value: 'Jully', label: 'Jully' },
        { value: 'Aguest', label: 'Aguest' },
        { value: 'September', label: 'September' },
        { value: 'October', label: 'October' },
        { value: 'November', label: 'November' },
        { value: 'December', label: 'December' }
    ];

    const isMonth = selectedTitle.filter((singleItem) => {
        return singleItem.value == "Monthly"
    })
    const isExam = selectedTitle.filter((singleItem) => {
        return singleItem.value == "Exam"
    })







    async function hanldeCheckout() {



        //check the inital all filed is fill or not
        if (id != "" && name != "" && number != "" && calas != "0" && selectedTitle.length > 0) {


            //check monthly and exam  was selected or not
            if (isMonth.length > 0 && isExam.length > 0) {


                //check month name and exam type was selected or not
                if (selectedMonth.length > 0 && exam != "0") {




                    const option = {
                        id: id,
                        name: name,
                        number: number,
                        calas: calas,
                        PaymentTitle: selectedTitle,
                        exam: exam,
                        monthName: selectedMonth
                    }



                    setisloading(true);
                    const res = await fetch("/api/paymentwithshurjopay", {
                        method: "POST",
                        headers: {
                            "content-Type": "application/json",
                        },
                        body: JSON.stringify(option)
                    });

                    const resposns = await res.json();


                    if (resposns.success) {
                        const paymentcallresponse = await paymentCall(resposns.res);
                        setisloading(false);
                        if (paymentcallresponse.success) {

                            const url = paymentcallresponse.data.checkout_url;
                            window.location.href = url;

                        } else {
                            toast.warn(paymentcallresponse.error);
                        }
                    } else {
                        setisloading(false);
                        toast.warn(resposns.error);
                    }





                } else {
                    toast.warn("Please! Enter Month Name and Exam Type");
                }

                //if only monthly was selected
            } else if (isMonth.length > 0) {

                if (selectedMonth.length > 0) {



                    const option = {
                        id: id,
                        name: name,
                        number: number,
                        calas: calas,
                        PaymentTitle: selectedTitle,
                        exam: exam,
                        monthName: selectedMonth
                    }



                    setisloading(true);
                    const res = await fetch("/api/paymentwithshurjopay", {
                        method: "POST",
                        headers: {
                            "content-Type": "application/json",
                        },
                        body: JSON.stringify(option)
                    });

                    const resposns = await res.json();



                    if (resposns.success) {
                        const paymentcallresponse = await paymentCall(resposns.res);
                        setisloading(false);
                        if (paymentcallresponse.success) {

                            const url = paymentcallresponse.data.checkout_url;
                            window.location.href = url;

                        } else {
                            toast.warn(paymentcallresponse.error);
                        }
                    } else {
                        setisloading(false);
                        toast.warn(resposns.error);
                    }


















                } else {
                    toast.warn("Please! Enter Month Name");
                }
                //if only exam was selected
            } else if (isExam.length > 0) {

                //if the exam type was not selected
                if (exam == "0") {
                    toast.warn("Please! Enter Exam Type");

                } else {






                    const option = {
                        id: id,
                        name: name,
                        number: number,
                        calas: calas,
                        PaymentTitle: selectedTitle,
                        exam: exam,
                        monthName: selectedMonth
                    }



                    setisloading(true);
                    const res = await fetch("/api/paymentwithshurjopay", {
                        method: "POST",
                        headers: {
                            "content-Type": "application/json",
                        },
                        body: JSON.stringify(option)
                    });

                    const resposns = await res.json();


                    if (resposns.success) {
                        const paymentcallresponse = await paymentCall(resposns.res);
                        setisloading(false);
                        if (paymentcallresponse.success) {

                            const url = paymentcallresponse.data.checkout_url;
                            window.location.href = url;

                        } else {
                            toast.warn(paymentcallresponse.error);
                        }
                    } else {
                        setisloading(false);
                        toast.warn(resposns.error);
                    }






                }
            } else {






                const option = {
                    id: id,
                    name: name,
                    number: number,
                    calas: calas,
                    PaymentTitle: selectedTitle,
                    exam: exam,
                    monthName: selectedMonth
                }



                setisloading(true);
                const res = await fetch("/api/paymentwithshurjopay", {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json",
                    },
                    body: JSON.stringify(option)
                });

                const resposns = await res.json();


                if (resposns.success) {
                    const paymentcallresponse = await paymentCall(resposns.res);
                    setisloading(false);
                    if (paymentcallresponse.success) {

                        const url = paymentcallresponse.data.checkout_url;
                        window.location.href = url;

                    } else {
                        toast.warn(paymentcallresponse.error);
                    }
                } else {
                    setisloading(false);
                    toast.warn(resposns.error);
                }




            }


        } else {
            toast.warn("Please! Enter all required filed");
        }


    }







    return (
        <main>
            <ToastContainer position="top-center" />
            <Meta title="Payment || Chandash Mokhdum Shah High School" />
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
                            <option value={"0"}>Class *</option>
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

                        <Select
                            isMulti
                            name="paymentTitle"
                            placeholder="Select Payment Title"
                            options={paymentOptions}
                            value={selectedTitle}
                            onChange={(selectedTitle) => setselectedTitle(selectedTitle)}
                            className={`basic-multi-select`}
                            classNamePrefix="select"
                        />




                        {
                            isMonth.length > 0 && <Select
                                isMulti
                                name="monthname"
                                placeholder="Select Month Name"
                                options={monthOptions}
                                value={selectedMonth}
                                onChange={(selectedMonth) => setselectedMonth(selectedMonth)}
                                className={`basic-multi-select`}
                                classNamePrefix="select"
                            />

                        }
                        {
                            isExam.length > 0 && <select onChange={(e) => setexam(e.target.value)}>
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
                            </select>
                        }



                        <button onClick={() => { hanldeCheckout() }}>Payment</button>
                    </div>
                </div>
            </Container >
        </main >
    )
}
