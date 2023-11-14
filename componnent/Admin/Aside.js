import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { CgOptions } from "react-icons/cg";
import { FaUserGraduate } from "react-icons/fa";
import { GoDashboard } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi";
import { ImLibrary } from "react-icons/im";
import { TiDocumentText } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../../styles/Admin/Aside.module.css";
import NestedMenu from "./NestedMenu";


export default function Aside() {

    const router = useRouter();

    const [sNested, setsNested] = useState(false);
    const [tNested, settNested] = useState(false);
    const [lNested, setlNested] = useState(false);
    const [dNested, setdNested] = useState(false);
    const [rNested, setrNested] = useState(false);
    const [cNested, setcNested] = useState(false);
    const [mNested, setmNested] = useState(false);
    const [opNested, setopNested] = useState(false);



    async function handleClick(e) {
        e.preventDefault();


        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/loginAndLogout/logedOut`, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({})
        });
        const data = await res.json();
        if (data.success) {
            router.push("/");
            toast.success(data.messege);
        }

    }





    return (
        <aside className={styles.asideWrp}>
            <ToastContainer position="bottom-left" />
            <div className={styles.Wrp}>
                <Link className={styles.link} href='/admin'> <GoDashboard className={styles.icons} /> Deshboard</Link>

                <NestedMenu contolValue={sNested} updateControllValue={setsNested} title="Students" icon={<FaUserGraduate className={styles.icons} />} value={["Panding Students", 'All Students', 'Payments']} length="3" destination={["/admin/students/pandingstudent", "/admin/students", "/admin/students/payments"]} />


                <NestedMenu contolValue={tNested} updateControllValue={settNested} title="Employees" icon={<HiUserGroup className={styles.icons} />} value={["All Employees", 'Payments']} length="2" destination={["/admin/employee", "/admin/employee/payment"]} />


                <Link className={styles.link} href='/admin/library'> <ImLibrary className={styles.icons} /> Library</Link>

                <Link className={styles.link} href='/admin/notice'> <TiDocumentText className={styles.icons} /> Notices</Link>



                <Link className={styles.link} href='/admin/sylabus'> <TiDocumentText className={styles.icons} /> Sylabus</Link>


                <Link className={styles.link} href='/admin/routing'> <TiDocumentText className={styles.icons} />Routing</Link>



                <Link className={styles.link} href='/admin/result'> <TiDocumentText className={styles.icons} /> Result</Link>



                <NestedMenu contolValue={opNested} updateControllValue={setopNested} title="Options" icon={<CgOptions className={styles.icons} />} value={["SMS", "File Ganarator", "Payment History"]} length="3" destination={["/admin/option/bulksms", "/admin/option/ganaratefile", "/admin/option/paymenthistory"]} />

                <NestedMenu contolValue={cNested} updateControllValue={setcNested} title=" Systems" icon={<AiTwotoneSetting className={styles.icons} />} value={["Gallerys", 'Administrations', 'Unit Payments', 'Marquee']} length="4" destination={["/admin/systems/gallerys", "/admin/systems/administrations", "/admin/systems/payments", "/admin/systems/marquee"]} />




                <div onClick={(e) => handleClick(e)} className={styles.link}> <BiLogOut className={styles.icons} /> Log Out</div>


            </div>

        </aside >
    )
}
