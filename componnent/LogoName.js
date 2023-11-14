import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import styles from "../styles/LogoName.module.css";

export default function LogoName({ isexiste }) {
    return (
        <Link href='/'>
            <div className={styles.logonameWrp}>
                <div className={styles.logo}>
                    <div className={styles.logoPloygy}>
                        <Image priority src={logo} height={600} width={600} alt="Logo" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

