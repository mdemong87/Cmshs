import { FiDownload } from "react-icons/fi";
import lcldate from "../helper/localdateConvartet";
import styles from "../styles/Notic.module.css";
import Loading from "./Loding";

export default function Notic({ data, error }) {


    if (error) {
        return (
            <div>
                {error}
            </div>
        )
    }

    if (!data) {
        return (
            <div>
                <Loading />
            </div>
        )
    }



    return (
        <div className={styles.noticWrp}>
            <div className={styles.heading}>
                <div>SL.</div>
                <div>Notice Title</div>
                <div>Date</div>
                <div>Download</div>
            </div>


            {/* dynamic notice mapping here
            
            */}

            {
                data?.notice.map((item, index) => {
                    return <div key={index} className={styles.body}>
                        <div>{index + 1}</div>
                        <div>{item.title}</div>
                        <div>{lcldate(item)}</div>
                        <div><a href={item.file.secure_url} download target="blank"><FiDownload className={styles.icons} /></a></div>
                    </div>
                })
            }





        </div>
    )
}
