import Link from 'next/link';
import React from 'react';
import { CiMedicalCross } from "react-icons/ci";
import Container from "../componnent/Container";
import styles from "../styles/payment/success.module.css";


export default function Failed() {
    return (
        <div>
            <Container>
                <div className={styles.successWrp}>
                    <div>
                        <div>
                            <CiMedicalCross className={styles.crossIcon} />
                        </div>
                        <h2>Sorry</h2>
                        <h1>Payment was Failed</h1>
                        <p>
                            <Link href={"/payment"}>Payment Again</Link>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
