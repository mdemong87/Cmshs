import Image from "next/image";
import logo from "../../public/logo.png";
import styles from "../../styles/Admin/Header.module.css";
import Profile from "./Profile";

export default function Header() {
    return (
        <div className={styles.headerWrp}>
            <div className={styles.headerContainer}>
                <Image property className={styles.adminLogo} width={400} height={400} src={logo} alt="admin-header-logo" />
                <Profile />
            </div>
        </div>
    )
}
