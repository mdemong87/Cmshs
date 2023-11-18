import { BiMoney } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import styles from "../../styles/Admin/FutureAdeshboard.module.css";

export default function FutureAdeshboard({ forFetured }) {

    const { earning, studentLength, teacherLength } = forFetured;



    if (Array.isArray(earning)) {
        // sum all payment amount
        var total = 0;
        earning.map((item) => {

            const date = new Date();
            const currentyear = date.getFullYear();
            const getyear = date.getFullYear(item.createdAt);

            if (currentyear == getyear) {
                total += Math.ceil(item.amount);
            }
        })
    }



    return (
        <div className={styles.fretured}>
            <div className={styles.futureList}>
                <div>
                    <div className={`${styles.iconsCircle} ${styles.student}`}>
                        <FaUserGraduate className={`${styles.icons} ${styles.istudent}`} />
                    </div>
                </div>
                <div className={styles.fetervalue}>
                    <b>Students</b>
                    <b className={styles.digit}>{studentLength}</b>
                </div>
            </div>
            <div className={styles.futureList}>
                <div>
                    <div className={`${styles.iconsCircle} ${styles.teacher}`}>
                        <HiUserGroup className={`${styles.icons} ${styles.iteacher}`} />
                    </div>
                </div>
                <div className={styles.fetervalue}>
                    <b>Employees</b>
                    <b className={styles.digit}>{teacherLength}</b>
                </div>
            </div>
            <div className={styles.futureList}>
                <div>
                    <div className={`${styles.iconsCircle} ${styles.earning}`}>
                        <BiMoney className={`${styles.icons} ${styles.iearning}`} />
                    </div>
                </div>
                <div className={styles.fetervalue}>
                    <b>Earning</b>
                    <b className={styles.digit}>{total} /-</b>
                </div>
            </div>
        </div>
    )
}


