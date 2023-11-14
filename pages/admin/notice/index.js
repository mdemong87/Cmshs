import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "../../../componnent/Admin/Layout";
import Loding from "../../../componnent/Loding";
import lcldate from "../../../helper/localdateConvartet";
import styles from "../../../styles/Admin/notice/notice.module.css";



export default function Index({ data, error }) {


    const router = useRouter();
    const [title, settitle] = useState("");
    const [file, setfile] = useState("");
    const [isloading, setisloading] = useState(false);


    function handlechange(e) {
        const file = e.target.files[0];
        if (file.size < 250000) {
            const filereacder = new FileReader();
            filereacder.onload = (event) => {
                setfile(event.target.result)
            }
            filereacder.readAsDataURL(file);
        } else {
            toast.warn("File Size is too Large.Keep it is Less the 250 KB");
        }
    }


    async function handleClick(e) {
        if (title != '' && file != "") {
            setisloading(true);

            const res = await fetch("/api/notice", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify({ title, file })
            });
            const resposns = await res.json();
            router.replace(router.asPath);
            if (resposns.success) {
                settitle("");
                setfile("");
                toast.success("Notice Upload Successsfully");
            } else {
                toast.error("Notice Upload Failed");
            }
            setisloading(false);
        } else {
            toast.warn("Please! Fill all required filed");
        }

    }




    async function handleDelete(id) {

        setisloading(true);

        const res = await fetch(`/api/notice/${id}`, {
            method: "DELETE",

        });

        const resposns = await res.json();
        router.replace(router.asPath);
        setisloading(false);

        if (resposns.success) {
            toast.success("Notice Delete Successfully");
        } else {
            toast.error("Notice Delete Failed");
        }

    }



    const rendering = error ? <div>{error}</div> : data?.notice.map((item, index) => {

        return <div key={index} className={styles.body}>
            <div>{index + 1}</div>
            <div>{item.title}</div>
            <div>{lcldate(item)}</div>
            <div><button onClick={() => handleDelete(item._id)}><AiFillDelete className={styles.icons} /></button></div>
        </div>

    })



    return (
        <div className={styles.allnoticewrp}>
            <ToastContainer position="bottom-left" />
            {isloading && <Loding />}
            <div className={styles.inputWrp}>
                <input value={title} type="text" placeholder="Enter Notice Title" onChange={(e) => settitle(e.target.value)} />
                <input type="file" value={""} onChange={(e) => handlechange(e)} />
                <button type="submit" onClick={(e) => handleClick(e)}>Add</button>

            </div>
            <div className={styles.noticWrp}>
                <div className={styles.heading}>
                    <div>SL.</div>
                    <div>Notice Title</div>
                    <div>Date</div>
                    <div>Delete</div>
                </div>







                {/* dynamice notice maping here */}

                {rendering}

            </div>
        </div>
    )
}


Index.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}


export async function getServerSideProps(context) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notice`);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        return {
            props: { data }, // will be passed to the page component as props
        };
    } catch (error) {
        // Handle the error
        console.error("An error occurred:", error);

        // You can return an error page or an error message here if needed
        return {
            props: { error: "An error occurred while fetching data" },
        };
    }
}