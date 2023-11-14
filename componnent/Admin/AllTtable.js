import Link from "next/link";
import styles from "../../styles/Admin/AllStTable.module.css";

export default function AllTtable() {
    return (

        <div className={styles.table}>
            <div className={styles.thead}>
                <td className={styles.headdiv}>SL</td>
                <td className={styles.headdiv}>Id</td>
                <td className={styles.headdiv}> Name</td >
                <td className={styles.headdiv}>Father's Name</td>
                <td className={styles.headdiv}>Mother's Name</td>
                <td className={styles.headdiv}>Class</td>
                <td className={styles.headdiv}>Roll</td>
                <td className={styles.headdiv}>Catagory</td>
                <td className={styles.headdiv}>Payment Status</td>
            </div >

            <Link className={styles.tbody} href={`/admin/students`} passHref>
                <td className={styles.bodydiv}>1</td>
                <td className={styles.bodydiv}>Id</td>
                <td className={styles.bodydiv}>ghg</td>
                <td className={styles.bodydiv}>dfg</td>
                <td className={styles.bodydiv}>hdfg</td>
                <td className={styles.bodydiv}>hdfh</td>
                <td className={styles.bodydiv}>hdfgh</td>
                <td className={styles.bodydiv}>hdfg</td>
                <td className={styles.bodydiv}>hdfg</td>
            </Link>
        </div >
    )
}
