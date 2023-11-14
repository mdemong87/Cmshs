import { FiDownload } from "react-icons/fi";
import admissionForm from "../helper/jspdf/admissionForm";
import styles from "../styles/download.module.css";





export default function RagistrationFromDownload({ data }) {


    function handleClick() {
        admissionForm(data);
    }


    return (
        <button onClick={handleClick} className={styles.downloadBtn}> <FiDownload className={styles.icons} />Download</button>
    )
}
