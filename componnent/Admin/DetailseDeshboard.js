import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from "../../styles/Admin/DetailseDeshboard.module.css";


export default function DetailseDeshboard() {
    const [value, setValue] = useState(new Date());
    const [clockvalue, setclockValue] = useState(new Date());
    const [tabcontroller, settabcontroller] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => setclockValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <div className={styles.detailseWrp}>
            <div className={styles.clockAllWrp}>
                <div className={styles.clockWrp}>
                    <h1>{clockvalue.toLocaleTimeString()}</h1>
                </div>
                <div className={styles.anoteherWrp}>
                    <Calendar className={styles.calenderErp} value={value} />
                </div>
            </div>
            <div className={styles.calanderallWrp}>
                <div className={styles.alltabWrper}>
                    <button className={tabcontroller == 1 ? styles.activeTab : null} onClick={() => settabcontroller(1)}>button</button>
                    <button className={tabcontroller == 2 ? styles.activeTab : null} onClick={() => settabcontroller(2)}>button</button>
                    <button className={tabcontroller == 3 ? styles.activeTab : null} onClick={() => settabcontroller(3)}>button</button>
                    <button className={tabcontroller == 4 ? styles.activeTab : null} onClick={() => settabcontroller(4)}> button</button >
                    <button className={tabcontroller == 5 ? styles.activeTab : null} onClick={() => settabcontroller(5)}>button</button>
                </div >

                <div className={styles.tabComponnentWrp}>
                    <h4>Data will be here soon.....</h4>
                </div>
            </div >
        </div >
    )
}
