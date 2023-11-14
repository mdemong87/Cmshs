import Container from "../componnent/Container";
import styles from "../styles/Header.module.css";
import LogoName from "./LogoName";
import Navber from "./Navber";


export default function Header() {


    return (
        <header className={styles.headerWrp}>
            <Container>
                <div className={styles.headerContainer}>
                    <LogoName />
                    <Navber />
                </div>
            </Container>
        </header>
    )
}