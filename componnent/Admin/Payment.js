import { useState } from "react";
import { TiTick } from "react-icons/ti";
import PaymentInputWrp from "../../componnent/Admin/PaymentInputWrp";
import styles from "../../styles/Admin/Payment.module.css";

export default function Payment({ data, settotal }) {
    const [add, setadd] = useState(1);
    const [tickController, settickController] = useState(false);



    function handleAdd() {
        setadd((prev) => {
            return prev + 1
        })
    }

    function handleMains() {
        setadd((prev) => {
            return prev - 1
        })
    }

    async function handleTick(e) {
        e.preventDefault();
        settickController(!tickController);

        // const res = await fetch


    }


    return (
        <div className={styles.paymentWrp}>
            <div>
                <div className={styles.corospondingStudentWrp}>
                    <div className={styles.corospondingStudent}>
                        <div>Id</div>
                        <div>Name</div>
                        <div> Father Name</div>
                        <div>Class</div>
                        <div>Due</div>
                        <div>Add To Payment</div>
                    </div>
                    <div className={styles.corospondingStudent}>
                        <div>{data && data.customid}</div>
                        <div>{data && data.fName}</div>
                        <div>{data && data.fatherName}</div>
                        <div>{data && data.wadmit}</div>
                        <div>{data && data.due}</div>
                        <div>
                            {data && <button onClick={(e) => handleTick(e)} className={`${styles.addTickWrp} ${tickController && styles.addTickController}`}><TiTick className={styles.addTick} /></button>}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.makePayWrp}>
                <div className={styles.paymentFiledWrper}>
                    <div> Title :</div>
                    <div> Quentity :</div>
                    <div> Fee :</div>
                    <div> Total :</div>
                </div>
                <PaymentInputWrp settotal={settotal} add={add} />
                <div className={styles.btn}>
                    <button onClick={handleAdd}>+</button>
                    <button onClick={handleMains}>-</button>
                </div>
            </div>
        </div>
    )
}
