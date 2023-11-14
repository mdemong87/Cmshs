import { useState } from "react";
import styles from "../../styles/Admin/PaymentInput.module.css";

export default function PaymentInput({ sId }) {

    const [quentityvalue, setquentityvalue] = useState(1);
    const [feevalue, setfeevalue] = useState(0);
    const total = quentityvalue * feevalue;


    function handleSelete(e) {
        const name = e.target.value;
    }



    function handleChangleforValue(e) {
        setquentityvalue(e.target.value);
    }


    return (
        <div className={styles.paymentInputWrp} >
            <div className={styles.paymentFiledWrper}>
                <div>
                    <select onChange={(e) => handleSelete(e)} name={sId} className={styles.filed}>
                        <option className={styles.option}>Selete one</option>
                        <option className={styles.option}>Monthly Fee</option>
                        <option className={styles.option}>Exam Fee</option>
                        <option className={styles.option}>Section Fee</option>
                        <option className={styles.option}>Course Fee</option>
                        <option className={styles.option}>Registration Fee</option>
                        <option className={styles.option}>MarkShirt Fee</option>
                        <option className={styles.option}>Tastimonial Fee</option>
                        <option className={styles.option}>Deparment Change Fee</option>
                        <option className={styles.option}>Admission Fee</option>
                        <option className={styles.option}>Admission Form Fee</option>
                        <option className={styles.option}>Others Fee</option>
                        <option className={styles.option}>Oral Exam Fee</option>
                        <option className={styles.option}>Central Fee</option>
                        <option className={styles.option}>Intarnal Sports Fee</option>
                        <option className={styles.option}>National Sports Fee</option>
                        <option className={styles.option}>Common Room Fee</option>
                        <option className={styles.option}>Magagin Fee</option>
                        <option className={styles.option}>Institute Development Fee</option>
                        <option className={styles.option}>Library Fee</option>
                        <option className={styles.option}>Labratory Fee</option>
                        <option className={styles.option}>Fine</option>
                        <option className={styles.option}>Electicity/Water/Gas</option>
                        <option className={styles.option}>New Student Welcome Fee</option>
                        <option className={styles.option}>Educational Travel Fee</option>
                        <option className={styles.option}>Delay Fee</option>
                    </select>
                </div>
                <div>
                    <input name={sId} onChange={(e) => handleChangleforValue(e)} className={styles.filed} value={quentityvalue} type="Number" />
                </div>
                <div className={styles.filed}>
                    {feevalue}
                </div>
                <div className={styles.filed}>
                    {total}
                </div>
            </div>
        </div>
    )
}
