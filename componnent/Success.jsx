import Link from 'next/link';
import React from 'react';
import { AiOutlineDownload } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import paymentRecipt from "..//helper/jspdf/paymentRecipt";
import Container from "../componnent/Container";
import styles from "../styles/payment/success.module.css";


export default function Success({ downloadData }) {


    //handle download function
    function handleDownload() {

        toast.info("Payment Recipt Download Started");
        paymentRecipt(downloadData);
    }


    return (
        <div>
            <Container>
                <div className={styles.successWrp}>
                    <div>
                        <div>
                            <TiTickOutline className={styles.tickIcon} />
                        </div>
                        <h2>Thank you</h2>
                        <h1>Payment Successfull</h1>
                        <button onClick={() => { handleDownload() }} className={styles.DownloadBtn}>
                            <span>Download Recipt</span>
                            <AiOutlineDownload className={styles.downloadIcons} />
                        </button>
                        <p>
                            <Link href={"/"}>Go to home page</Link>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
