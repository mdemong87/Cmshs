import Image from "next/image";
import profile from "../public/profile.jpg";
import styles from "../styles/Profile.module.css";

export default function Profile() {
    return (

        <div className={styles.profilewrp}>
            <div>
                <div className={styles.mainiiiTitle}>
                    <h4 className={styles.h4}>Head of Organization</h4>
                </div>
                <div className={styles.headTeacherImg}>
                    <div className={styles.headTImg}>
                        <Image className={styles.profile} src={profile} width="100px" alt="profile" />

                    </div>
                </div>
                <div className={styles.teacherName}>
                    <h4 className={styles.h4}>Md.mijanur Rahaman</h4>
                </div>
            </div>
        </div>

    )
}
