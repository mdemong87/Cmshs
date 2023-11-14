import { useState } from "react";
import styles from "../../styles/reset.module.css";

export default function Reset() {

    const [email, setemail] = useState('');


    function handleReset() {
        if (email == '') {
            window.alert("Enter Email Address");
        } else if (email != process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
            alert("Email is not Exist in the System");
        } else {
            window.alert("This servise is no longer available.Try to Remember the password");
        }
    }
    return (
        <div className={styles.loginWRp}>
            <h2 className={styles.h2}>Reset Password</h2>
            <input onChange={(e) => setemail(e.target.value)} className={styles.input} placeholder="Enter Your Email" type="email" />
            <button onClick={handleReset} className={styles.button}>Reset</button>
        </div>
    )
}
