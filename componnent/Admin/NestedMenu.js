import Link from "next/link";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import styles from "../../styles/Admin/NestedMenu.module.css";

export default function NestedMenu({ contolValue, updateControllValue, title, value, length, destination, icon }) {



    const item = [];
    for (var i = 0; i < length; i++) {

        const div = <Link key={i} className={`${styles.link}  ${!contolValue ? styles.nestedLink : styles.openNestedLink} `} href={`${destination[i]}`}>{value[i]}</Link>
        item.push(div);
    }



    return (
        <div>
            <div onClick={() => updateControllValue(!contolValue)} className={styles.link}>
                <div className={styles.nes}>{icon}{title}</div>
                <div>
                    {contolValue ? <BiUpArrow className={styles.arroIcons} /> : <BiDownArrow className={styles.arroIcons} />}
                </div>
            </div>
            <div>{item}</div>
        </div>


    )
}
