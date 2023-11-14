import { useRouter } from "next/router";
import styles from "../../styles/SingleLogin.module.css";

export default function Varify() {
    const router = useRouter();
    function handleVarify() {
        router.push("/admin");
    }


    return (
        <div className={styles.loginWRp}>
            <h2 className={styles.h2}>Varify OTP</h2>
            <input className={styles.input} placeholder="Enter 4 Digit OTP" type="number" />
            <button onClick={handleVarify} className={styles.button}>Varify</button>
        </div>
    )
}
