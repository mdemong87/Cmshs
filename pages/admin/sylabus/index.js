import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "../../../componnent/Admin/Layout";
import Loding from "../../../componnent/Loding";
import lcldate from "../../../helper/localdateConvartet";
import styles from "../../../styles/Admin/sylabus/sylabus.module.css";


export default function Index({ data, error }) {


    const router = useRouter();
    const [title, settitle] = useState("");
    const [classnum, setclassnum] = useState("");
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
        if (classnum != '' && file != "" && title != "") {
            setisloading(true);

            const res = await fetch("/api/sylabus", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify({ title, classnum, file })
            });
            const resposns = await res.json();
            router.replace(router.asPath);
            if (resposns.success) {
                settitle('');
                setclassnum("");
                setfile("");
                toast.success("Sylabus Upload Successfully");
            } else {
                toast.error("Sylabus Upload Failed");
            }
            setisloading(false);
        } else {
            toast.warn("Please! Enter Sylabus Name and Selete File");
        }

    }




    async function handleDelete(id) {

        setisloading(true);

        const res = await fetch(`/api/sylabus/${id}`, {
            method: "DELETE",

        });

        const resposns = await res.json();
        router.replace(router.asPath);
        setisloading(false);

        if (resposns.success) {
            toast.success("Sylabus Delete Successfully");
        } else {
            toast.error("Sylabus Delete Failed");
        }

    }



    const rendering = error ? <div>{error}</div> : data?.sylabus.map((item, index) => {

        return <div key={index} className={styles.body}>
            <div>{index + 1}</div>
            <div>{item.title}</div>
            <div>{item.classNumber}</div>
            <div>{lcldate(item)}</div>
            <div><button onClick={() => handleDelete(item._id)}><AiFillDelete className={styles.icons} /></button></div>
        </div>

    })



    return (
        <div className={styles.allnoticewrp}>
            <ToastContainer position="bottom-left" />
            {isloading && <Loding />}
            <div className={styles.inputWrp}>
                <input value={title} type="text" onChange={(e) => { settitle(e.target.value) }} placeholder="Name of Sylabus" />
                <input value={classnum} type="number" placeholder="Class of Sylabus" onChange={(e) => setclassnum(e.target.value)} />
                <input type="file" value={''} onChange={(e) => handlechange(e)} />
                <button type="submit" onClick={(e) => handleClick(e)}>Add</button>

            </div>
            <div className={styles.noticWrp}>
                <div className={styles.heading}>
                    <div>SL.</div>
                    <div>Name</div>
                    <div>Class</div>
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sylabus`);

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