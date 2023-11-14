import Link from 'next/link';
import React from 'react';
import { CiMedicalCross } from "react-icons/ci";
import Container from "../componnent/Container";
import styles from "../styles/payment/success.module.css";


export default function NotFound() {
    return (
        <div>
            <Container>
                <div className={styles.successWrp}>
                    <div>
                        <div>
                            <CiMedicalCross className={styles.crossIcon} />
                        </div>
                        <h2>404</h2>
                        <h1>Page Not Found</h1>
                        <p>
                            <Link href={"/"}>Go To Home Page</Link>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
