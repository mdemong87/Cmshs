import Container from '../componnent/Container';
import Meta from "../componnent/Meta";
import SingleLogin from "../componnent/SingleLogin";
import styles from "../styles/Login.module.css";

export default function Login() {
    return (
        <main>
            <Meta title="Login Page" name="Login Page" content='Login page' />
            <Container>
                <div className={styles.singlelogin}>
                    <SingleLogin title="Admin Login" fildTwo='Password' FildOne='Email' buttonTitle="Login" />
                </div>
            </Container>
        </main>
    )
}
