import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../../styles/Admin/PandingTable.module.css";

export default function PandingTable({ Data, setloading, loading, error }) {

    const router = useRouter();


    async function handleAdd(e, id) {
        e.preventDefault();
        setloading(true);
        const respons = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/students/panding`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, sttus: true })
        })

        const respond = await respons.json();
        router.replace(router.asPath);
        setloading(false);
        if (respond.success) {
            toast.success(respond.message);
        } else {
            toast.error(respond.error);
        }
    }


    async function handleCencle(e, id) {
        e.preventDefault();


        setloading(true);

        const respons = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/students/panding`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        })
        const respond = await respons.json();
        router.replace(router.asPath);
        setloading(false);
        if (respond.success) {
            toast.success(respond.message);
        } else {
            toast.error(respond.error);
        }

    }



    const renderingdata = error ? <div>{error}</div> : Data?.map((item, index) => {
        return <div key={index} className={styles.tbody}>
            <div className={styles.bodydiv}>{index + 1}</div>
            <div className={styles.bodydiv}>{item.customid}</div>
            <div className={styles.bodydiv}>{item.fName}</div>
            <div className={styles.bodydiv}>{item.faterName}</div>
            <div className={styles.bodydiv}>{item.moterName}</div>
            <div className={`${styles.bodydiv} ${styles.btnWrp}`}>
                <button disabled={loading} onClick={(e) => handleCencle(e, item._id)} className={`${styles.button} ${styles.cencle}`}>Cencle</button>
                <button disabled={loading} onClick={(e) => handleAdd(e, item._id)} className={`${styles.button} ${styles.add}`}>Add</button>
            </div>
        </div>
    })






    return (
        <div className={styles.pandingTableWrp}>
            <ToastContainer position="bottom-left" />
            <div className={styles.thead}>
                <div className={styles.headdiv}>SL</div>
                <div className={styles.headdiv}>Id</div>
                <div className={styles.headdiv}> Name</div >
                <div className={styles.headdiv}>Father's Name</div>
                <div className={styles.headdiv}>Mother's Name</div>
                <div className={styles.headdiv}>Action</div>
            </div >


            {
                renderingdata
            }
        </div>
    )
}


