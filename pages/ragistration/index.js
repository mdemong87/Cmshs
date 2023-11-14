import { useState } from "react";
import Container from "../../componnent/Container";
import Four from "../../componnent/Four";
import Loding from "../../componnent/Loding";
import Meta from "../../componnent/Meta";
import NextAndPrev from "../../componnent/NextAndPrev";
import One from "../../componnent/One";
import Prograssber from "../../componnent/Prograssber";
import Three from "../../componnent/Three";
import Two from "../../componnent/Two";
import styles from "../../styles/Ragistration.module.css";

export default function Index() {

    const [rander, setrander] = useState(1);
    const [loding, setloding] = useState(false);

    return (
        <main className={styles.RAndAWrp}>
            <Meta title="Ragistration" name="Ragistration" content='Ragistration' />
            <Container>
                <div className={styles.container}>
                    {loding && <Loding />}
                    <h2 className={styles.h2}>Students Registrations</h2>
                    <Prograssber rander={rander} setrander={setrander} />
                    {rander === 1 && <One />}
                    {rander === 2 && <Two />}
                    {rander === 3 && <Three />}
                    {rander === 4 && <Four />}
                    <NextAndPrev loding={loding} setloding={setloding} rander={rander} setrander={setrander} />
                </div>
            </Container>
        </main>


    )
}




