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

            </div >
        </div >
    )
}
