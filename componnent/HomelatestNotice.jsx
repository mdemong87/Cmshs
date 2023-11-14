import Link from "next/link";
import lcldate from "../helper/localdateConvartet";
import styles from "../styles/HomeLatestNotice.module.css";


export default function HomeLatestNotice({ datathree }) {


    return (
        <div style={{ marginBottom: "20px" }} className={styles.inportamtLinkWrp}>
            <div className={styles.mainiiiTitle}>
                <h3 className={styles.h4}>Latest Notices</h3>
            </div>
            <marquee scrollamount="3" direction="up" className={styles.importantsLink}>
                <div>

                    {datathree?.notice.map((item, index) => {
                        return (
                            <Link key={index} className={styles.link} href='/notice'>
                                <span>{item.title}</span>
                                <span>{lcldate(item)}</span>
                            </Link>
                        )
                    })}

                </div>
            </marquee>
        </div>
    )
}

