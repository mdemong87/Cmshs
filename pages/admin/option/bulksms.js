import React, { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "../../../componnent/Admin/Layout";
import Loding from "../../../componnent/Loding";
import styles from "../../../styles/Admin/option/bulksms.module.css";



export default function Bulksms({ data }) {


    const [id, setid] = useState("");
    const [showmodal, setshowmodal] = useState(false);
    const [numarray, setnumarray] = useState([]);
    const [messege, setmessege] = useState("");
    const [peaple, setpeaple] = useState(1);
    const [isloading, setisloading] = useState(false);





    //handle add function
    function handleAdd() {
        if (id.trim() !== "") {
            const newArray = [...numarray, id];
            setnumarray(newArray);
            setid("");
            setshowmodal(false);
        } else {
            toast.warn("Please! Enter Student ID");
        }
    }

    //handle cancle function
    function handleCancle(index) {
        const newvalue = numarray.splice(index, 1);
        const returnvalue = numarray.filter((item) => {
            return item !== newvalue;
        })
        setnumarray(returnvalue);

    }

    async function handleClick() {

        if (messege == "" || numarray.length < 1 || peaple == 0) {
            toast.warn("Please write massege and add student id")
        } else {

            setisloading(true);
            const res = await fetch("/api/option/sms", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify({ peaple, messege, numarray })
            });
            const resposns = await res.json();

            if (resposns.success) {
                setmessege("");
                setnumarray([]);
                setisloading(false);
                toast.success("SMS send Successfully");
            } else {
                setisloading(false);
                toast.error(resposns.error);
            }

        }


    }


    return (
        <div className={styles.smscontainer}>
            {isloading && <Loding />}
            <div className={styles.topWrp}>
                <h2>Number of SMS  : {numarray.length}</h2>
                <h2>Balance : {data?.balance}</h2>
                <select onChange={(e) => setpeaple(e.target.value)}>
                    <option value={1}>Gardians</option>
                    <option value={2}>Teachers</option>
                    <option value={3}>Commite</option>
                    <option value={4}>Staff</option>
                </select>
            </div>
            <div className={styles.middleWrp}>
                {
                    numarray.map((item, index) => {
                        return (<div className={styles.tooltip} key={index}>
                            <span>{item}</span> <ImCross onClick={() => { handleCancle(index) }} className={styles.crossIcon} />
                        </div>
                        )
                    })
                }
                <button onClick={() => { setshowmodal(true) }} className={styles.adding} >
                    <AiOutlinePlus />
                </button>
            </div>
            <div className={styles.bottomWrp}>
                <textarea value={messege} onChange={(e) => setmessege(e.target.value)} placeholder='Write massege...' className={styles.textArea}></textarea>
                <button className={styles.sendBtn} onClick={() => handleClick()}>Send</button>
            </div>
            {showmodal && <div className={styles.overLayer} />}
            {
                showmodal && <div className={styles.inputerWrp}>
                    <div>
                        <input value={id} onChange={(e) => setid(e.target.value)} type="text" placeholder='Student Id' onKeyPress={(e) => {
                            // Check if the pressed key is a number (0-9) or the Backspace key (code 8)
                            if (e.key === "Backspace" || /^[0-9]+$/.test(e.key)) {
                                return; // Allow the keypress
                            } else {
                                e.preventDefault(); // Prevent input of non-numeric characters
                            }
                        }} />
                        <div>
                            <button onClick={() => { setshowmodal(false) }}>Close</button>
                            <button onClick={() => handleAdd()}>Add</button>
                        </div>
                    </div>
                </div>
            }
            <ToastContainer position='bottom-left' />
        </div >
    )
}



Bulksms.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}




export async function getServerSideProps(context) {

    try {
        const res = await fetch(`https://www.24bulksmsbd.com//api/balance?customer_id=${process.env.NEXT_PUBLIC_BULK_CUSTOMER_ID}&api_key=${process.env.NEXT_PUBLIC_BULK_API_KEY}`);

        if (!res.ok) {
            throw new error();
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

