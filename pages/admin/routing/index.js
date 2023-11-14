import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../../componnent/Admin/Layout';
import Loding from "../../../componnent/Loding";
import lcldate from "../../../helper/localdateConvartet";
import styles from "../../../styles/Admin/result/result.module.css";


export default function Index({ data, error }) {


    const router = useRouter();
    const [catagory, setcatagory] = useState("");
    const [file, setfile] = useState("");
    const [classnum, setclassnum] = useState('');
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

        if (catagory != '' && classnum != '' && file != '') {
            setisloading(true);

            const res = await fetch("/api/routing", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify({ catagory, classnum, file })
            });
            const resposns = await res.json();
            router.replace(router.asPath);
            if (resposns.success) {
                toast.success("Routine Upload Successfully");
                setcatagory('');
                setfile('');
                setclassnum('');
            } else {
                toast.error("Routine Upload Failed");
            }
            setisloading(false);
        } else {
            toast.warn("Please Fill the all input filed");

        }

    }




    async function handleDelete(id) {

        setisloading(true);

        const res = await fetch(`/api/routing/${id}`, {
            method: "DELETE",

        });

        const resposns = await res.json();
        router.replace(router.asPath);
        setisloading(false);

        if (resposns.success) {
            toast.success("Routine Delete Successfully");
        } else {
            alert("Routing does't Delete successfully.");
            toast.error("Routine Upload Failed");
        }

    }




    //render conditionaly jsx
    const rendering = error ? <div>{error}</div> : !data ? <div><Loding /></div> : data?.routing.map((item, index) => {
        return <div key={index} className={styles.body}>
            <div>{index + 1}</div>
            <div>{item.catagory}</div>
            <div>{item.classNumber}</div>
            <div>{lcldate(item)}</div>
            <div><button onClick={() => handleDelete(item._id)}><AiFillDelete className={styles.icons} /></button></div>
        </div>

    })




    return (
        <div className={styles.allnoticewrp}>
            <ToastContainer position='bottom-left' />
            {isloading && <Loding />}
            <div className={styles.inputWrp}>

                <select value={catagory} onChange={(e) => setcatagory(e.target.value)}>
                    <option value=''>select Catagory</option>
                    <option value='Class Routing'>Class Routing</option>
                    <option value='Exam Routing'>Exam Routing</option>
                </select>

                <input value={classnum} type="number" placeholder="Class" onChange={(e) => setclassnum(e.target.value)} />

                <input type="file" value={""} onChange={(e) => handlechange(e)} />

                <button type="submit" onClick={(e) => handleClick(e)}>Add</button>

            </div>
            <div className={styles.noticWrp}>
                <div className={styles.heading}>
                    <div>SL.</div>
                    <div>Catagory</div>
                    <div>Class</div>
                    <div>Date</div>
                    <div>Delete</div>
                </div>

                {/* dynamice notice maping here */}

                {
                    rendering
                }

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
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/routing`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return {
            props: { data }, // will be passed to the page component as props
        }

    } catch (error) {
        // Handle the error
        console.error("An error occurred:", error);
        // You can return an error page or an error message here if needed
        return {
            props: { error: "An error occurred while fetching data" },
        };
    }


}
