import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loding from "../componnent/Loding";
import styles from "../styles/SingleLogin.module.css";



export default function SingleLogin({ title, FildOne, fildTwo, buttonTitle }) {

    const router = useRouter();

    const [emailfiled, setemailFiled] = useState("");
    const [passFiled, setpassFiled] = useState("");
    const [isloading, setisloading] = useState(false);


    async function handleClick(e) {
        e.preventDefault();
        if (emailfiled !== "" && passFiled !== "") {
            setisloading(true);

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/loginAndLogout/logedIn`, {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify({ emailfiled, passFiled, LogedIn: "gdsfgsdfgsdfgsdfgsdfgsdf" })
            });
            const data = await res.json();


            if (!data.success) {
                setisloading(false);
                toast.error(data.error)
            } else {
                setisloading(false);
                toast.success(data.messege)
                //redirect to deshboard page
                window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/admin`;
            }

        } else {
            toast.warn("Palse Enter Credancial");
        }

    }

    useEffect(() => {
        router.prefetch("/admin");
    }, [router])


    return (
        <div className={styles.loginWRp}>
            <ToastContainer position="top-center" />
            {isloading && <Loding />}
            <h2 className={styles.h2}>{title}</h2>
            <input onChange={(e) => setemailFiled(e.target.value)} className={styles.input} placeholder={FildOne} type={FildOne} />
            <input onChange={(e) => setpassFiled(e.target.value)} className={styles.input} placeholder={fildTwo} type={fildTwo} />
            <button onClick={(e) => handleClick(e)} className={styles.button}>{buttonTitle}</button>

            <Link className={styles.forgetpass} href="/reset">Forget Password</Link>
        </div>
    )
}