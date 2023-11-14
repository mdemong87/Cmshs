import Link from "next/link";
import styles from "../styles/ImportantLink.module.css";


export default function ImportantLink() {
    return (
        <div className={styles.inportamtLinkWrp}>
            <div className={styles.mainiiiTitle}>
                <h3 className={styles.h4}>Officials Links</h3>
            </div>
            <div className={styles.importantsLink}>
                <Link className={styles.link} href='/'>State of Prime Minister</Link>
                <Link className={styles.link} href='/'>Education Board Result</Link>
                <Link className={styles.link} href='/'>State of Prime Minister</Link>
                <Link className={styles.link} href='/'>Education Board Result</Link>
                <Link className={styles.link} href='/'>Education Board Result</Link>
            </div>
        </div>
    )
}

