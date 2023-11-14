import { BiMoney } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import styles from "../../styles/Admin/FutureAdeshboard.module.css";

export default function FutureAdeshboard({ forFetured }) {

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
                    <b className={styles.digit}>{forFetured.studentLength}</b>
                </div>
            </div>
            <div className={styles.futureList}>
                <div>
                    <div className={`${styles.iconsCircle} ${styles.teacher}`}>
                        <HiUserGroup className={`${styles.icons} ${styles.iteacher}`} />
                    </div>
                </div>
                <div className={styles.fetervalue}>
                    <b>Teachers</b>
                    <b className={styles.digit}>{forFetured.teacherLength}</b>
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
                    <b className={styles.digit}>{forFetured.earning}</b>
                </div>
            </div>
        </div>
    )
}


