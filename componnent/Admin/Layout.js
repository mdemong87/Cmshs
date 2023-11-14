import styles from "../../styles/Admin/Layout.module.css";
import Aside from "./Aside";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className={styles.layoutWrp}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.aside}>
                <Aside />
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}
