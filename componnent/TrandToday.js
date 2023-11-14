import { TfiAnnouncement } from "react-icons/tfi";
import { UseTreandToday } from "../context/trandTodayContext";
import styles from "../styles/TrandToday.module.css";
export default function TrandToday({ clasname }) {

    const { marquee, setmarquee } = UseTreandToday();

    var marqueeText = "";
    for (var i = 0; i < marquee?.length; i++) {
        marqueeText += `${marquee[i].marquee.toString()} || `;

    }


    return (
        <div>
            <div className={`${styles.trandTodayWrp} ${clasname && styles.noticeCall}`}>
                <div className={styles.trandingToday}>
                    <h4><TfiAnnouncement className={styles.trandIcons} /><span className={styles.trandingHeader}>Trending Today</span></h4>
                </div>
                <div className={styles.marquee}>
                    <marquee behavior="scroll" direction="left">{marqueeText} </marquee>
                </div>
            </div>
        </div >
    )
}





