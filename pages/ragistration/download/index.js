import { TiTickOutline } from "react-icons/ti";
import RagistrationFromDownload from "../../../componnent/RagistrationFromDownload";
import { UseFrom } from "../../../context/fromContext";
import styles from "../../../styles/download.module.css";

export default function index() {

    const { res } = UseFrom();


    return (
        <div className={styles.downloadWrp}>
            <div className={styles.iconWrper}>
                <TiTickOutline className={styles.tickIcon} />
            </div>
            <h2>Congratulations!<br />Application Submitted Successfully</h2>

            <div>
                <h3>To Compleate Admission Process, You have to follow the following instractions:</h3>
                <ol className={styles.list}>
                    <li>Download the Admission Form.</li>
                    <li>Payment Admission Fee.</li>
                    <li>Go to school with the Admission form and payment Recipt. </li>
                </ol>
            </div>

            <p>Your id:{res ? res.student?.customid : ""}</p>

            <RagistrationFromDownload data={res} />
        </div>
    )
}
