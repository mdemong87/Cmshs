import { BiMessageAltDetail } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from "../../styles/Admin/Profile.module.css";

export default function Profile() {
    return (
        <div>
            <div className={styles.profileWrp}>
                <div>
                    <IoIosNotifications onClick={() => toast.info("This Servise is under Developing")} className={styles.icons} />
                </div>
                <div>
                    <BiMessageAltDetail onClick={() => toast.info("This Servise is under Developing")} className={styles.icons} />
                </div>
                <div>

                    <FaUserCircle onClick={() => toast.info("This Servise is under Developing")} className={styles.icons} />
                </div>
            </div>
            <ToastContainer position="bottom-left" />
        </div>
    )
}
