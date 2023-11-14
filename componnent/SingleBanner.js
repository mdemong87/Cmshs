import Link from 'next/link';
import React from 'react';
import { MdPayment } from "react-icons/md";
import { TbSend } from "react-icons/tb";
import Container from "../componnent/Container";
import styles from "../styles/Banner.module.css";

export default function SingleBanner({ sl, head, dis }) {
    return (
        <div className={sl == 1 ? styles.onesigWrp : sl == 2 ? styles.twosigWrp : sl == 3 ? styles.threesigWrp : styles.foursigWrp}>
            <div className={styles.back}>
                <div>
                    <Container>
                        <article className={styles.hetoTextWrp}>
                            <h1>{head}</h1>
                            <p>{dis}</p>
                            <Link href={`${sl == 1 ? "/payment" : sl == 2 ? "/ragistration" : sl == 3 ? "/payment" : "/ragistration"}`}>

                                {
                                    sl == 2 || sl == 4 ? <button className={styles.herobtn}>
                                        <span>
                                            <span className={styles.smallnone}>
                                                Online
                                            </span>
                                            <span>
                                                Admission
                                            </span>
                                        </span>
                                        <TbSend className={styles.sendIcon} />
                                    </button> : null
                                }

                                {
                                    sl == 1 || sl == 3 ? <button className={styles.herobtn}>
                                        <span>
                                            Payment
                                        </span>
                                        <MdPayment className={styles.sendIcon} />
                                    </button> : null
                                }

                            </Link>
                        </article>
                    </Container>
                </div>
            </div>
        </div >
    )
}
