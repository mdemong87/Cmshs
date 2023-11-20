import Link from "next/link";
import Loding from "../../componnent/Loding";
import styles from "../../styles/Admin/AllStTable.module.css";

export default function AllstTable({ data, error }) {

    if (error) {
        return (
            <div>{error}</div>
        )
    }

    if (!data) {
        return (
            <div>
                <Loding />
            </div>
        )
    }




    return (
        <div>
            {
                data ? <div className={styles.table
                } >
                    <div className={styles.thead}>
                        <div className={styles.headdiv}>SL</div>
                        <div className={styles.headdiv}>Id</div>
                        <div className={styles.headdiv}> Name</div >
                        <div className={styles.headdiv}>Father's Name</div>
                        <div className={styles.headdiv}>Mother's Name</div>
                        <div className={styles.headdiv}>Class</div>
                        <div className={styles.headdiv}>Roll</div>
                        <div className={styles.headdiv}>Payment Due</div>
                    </div >

                    {
                        data.map((item, index) => {
                            return <Link key={index} className={styles.tbody} href={`/admin/students/${item._id}`} passHref>
                                <div className={styles.bodydiv}>{index + 1}</div>
                                <div className={styles.bodydiv}>{item.customid}</div>
                                <div className={styles.bodydiv}>{item.fName}</div>
                                <div className={styles.bodydiv}>{item.faterName}</div>
                                <div className={styles.bodydiv}>{item.moterName
                                }</div>
                                <div className={styles.bodydiv}>{item.wadmit}</div>
                                <div className={styles.bodydiv}>{item.roll}</div>
                                <div className={styles.bodydiv}>{item.Paymentstatus}</div>
                            </Link>
                        })
                    }


                </div > : <Loding />

            }

        </div>
    )
}
