import Link from "next/link";
import styles from "../styles/Menu.module.css";

export default function Menu() {
    return (
        <aside className={styles.menuWrp}>
            <h3>Menu</h3>
            <div className={styles.div}>
                <Link className={styles.link} href='/'>Home</Link>
                <Link className={styles.link} href='/about'>About us</Link>
                <Link className={styles.link} href='/notice'>Notices</Link>
                <Link className={styles.link} href='/routine'> Routines</Link>
                <Link className={styles.link} href='/sylebus'> Syllabus</Link>
                <Link className={styles.link} href='/employee'>Employees</Link>
                <Link className={styles.link} href='/results'>Results</Link>
                <Link className={styles.link} href='/library'>Librarys
                </Link>
                <Link className={styles.link} href='/gellary'>Gellarys
                </Link>
                <Link className={styles.link} href='/payment'> Payment</Link>
                <Link className={styles.link} href='/ragistration'>Online Admission
                </Link>
                <Link className={styles.link} href='/login'>Login</Link>
            </div>
        </aside >
    )
}
