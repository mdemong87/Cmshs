import styles from "../styles/Loding.module.css";

export default function Loding() {
    return (
        <div className={styles.loadingWrp}>

            <div className={`${styles.loader} ${styles.book}`}>
                <figure className={styles.page}>

                </figure>
                <figure className={styles.page}>

                </figure>
                <figure className={styles.page}>

                </figure>
            </div>

        </div >
    )
}

