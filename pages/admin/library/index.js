import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminSingleLibraryTable from "../../../componnent/Admin/AdminSingleLibraryTable";
import Layout from '../../../componnent/Admin/Layout';
import Loding from "../../../componnent/Loding";
import styles from "../../../styles/Admin/exployee/employee.module.css";
import style from "../../../styles/library/library.module.css";




export default function Library({ data, error }) {
    //re-asign data
    const datas = data?.library;
    //state diclear
    const router = useRouter();
    const [catagory, setcatagory] = useState("");
    const [book, setbook] = useState("");
    const [title, settitle] = useState('');
    const [author, setauthor] = useState("");
    const [publisher, setpublisher] = useState('');
    const [thumnal, setthumnal] = useState('');
    const [classes, setclasses] = useState('');
    const [subject, setsubject] = useState('');
    const [language, setlanguage] = useState("");
    const [discription, setdiscription] = useState('');
    const [isloading, setisloading] = useState(false);
    const [filterValue, setfilterValue] = useState(" ");




    function handlechange(e) {
        const file = e.target.files[0];
        if (file.size < 200000) {
            const filereacder = new FileReader();
            filereacder.onload = (event) => {
                setthumnal(event.target.result)
            }
            filereacder.readAsDataURL(file);
        } else {
            toast.warn("File Size is too Large.Keep it is Less the 200 KB");
        }
    }

    function handlechangeforBook(e) {
        const file = e.target.files[0];
        if (file.size < 250000) {
            const filereacder = new FileReader();
            filereacder.onload = (event) => {
                setbook(event.target.result)
            }
            filereacder.readAsDataURL(file);

        } else {
            toast.warn("File Size is too Large.Keep it is Less the 250 KB");
        }

    }

    async function handleClick(e) {

        if (catagory != '' && book != '' && thumnal != '' && publisher != '' && title != " " && subject != " " && discription != " " && author != " " && language != " ") {

            setisloading(true);

            const res = await fetch("/api/library", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    author,
                    catagory,
                    publisher,
                    classes,
                    subject,
                    language,
                    discription,
                    thumnal,
                    book
                })
            });
            const resposns = await res.json();
            router.replace(router.asPath);
            if (resposns.success) {
                toast.success("Book Upload Successfully");
                setcatagory('');
                setbook('');
                setthumnal('');
                setauthor('');
                setsubject("");
                setpublisher('');
                setclasses("");
                setdiscription('');
                settitle("");
                setlanguage("");
            } else {
                toast.error("Book Upload Failed")
            }
            setisloading(false);
        } else {
            toast.warn("Please! Fill All the Required Filed");
        }

    }


    //filtering data with the user input
    const filteringData = datas?.filter((item) => {
        if (filterValue != " ") {
            return item.catagory == filterValue;
        } else {
            return datas;
        }
    });





    return (
        <div>
            <div className={styles.container}>
                <ToastContainer position='bottom-left' />
                {isloading && <Loding />}
                <div className={styles.inputWrp}>

                    <input value={title} type="text" placeholder=" Book Title *" onChange={(e) => settitle(e.target.value)} />

                    <input value={author} type="text" placeholder="Author *" onChange={(e) => setauthor(e.target.value)} />

                    <select value={catagory} onChange={(e) => setcatagory(e.target.value)}>
                        <option value=' '>select Catagory *</option>
                        <option value={"Text book"}>Text book</option>
                        <option value={'Children book'}>Children book</option>
                        <option value={"Story book"}>Story book</option>
                        <option value={'Refarence book'}>Refarence book</option>
                        <option value={'Fiction book'}>Fiction book</option>
                        <option value={'Others'}>Others</option>
                    </select>

                    <input value={publisher} type="text" placeholder="Publisher Name *" onChange={(e) => setpublisher(e.target.value)} />


                    <input value={classes} type="number" placeholder="Enter Class" onChange={(e) => setclasses(e.target.value)} />


                    <input value={subject} type="text" placeholder="Book Subject *" onChange={(e) => setsubject(e.target.value)} />


                    <input value={language} type="text" placeholder="Book Language *" onChange={(e) => setlanguage(e.target.value)} />

                    <textarea value={discription} onChange={(e) => setdiscription(e.target.value)} placeholder='Discription *'></textarea>


                </div>
                <div className={styles.btnWrpandlastWrp}>
                    <div>
                        <p>Book Thumnal *</p>
                        <input type="file" name={thumnal} value={""} onChange={(e) => handlechange(e)} />
                    </div>

                    <div>
                        <p>Book pdf *</p>
                        <input type="file" value={''} onChange={(e) => handlechangeforBook(e)} />
                    </div>

                    <button type="submit" onClick={(e) => handleClick(e)}>Add</button>
                </div>

                <div className={styles.routingWrp}>
                    <div className={style.headerWrpforAdmin}>
                        <h1>Library</h1>
                        <select onChange={(e) => setfilterValue(e.target.value)}>
                            <option value=' '>select Book Type *</option>
                            <option value={"Text book"}>Text book</option>
                            <option value={"Children book"}>Children book</option>
                            <option value={"Story book"}>Story book</option>
                            <option value={"Refarence book"}>Refarence book</option>
                            <option value={'Fiction book'}>Fiction book</option>
                            <option value={"others"}>Others</option>
                        </select>
                    </div>
                    <div>

                        {
                            <AdminSingleLibraryTable data={filteringData} />
                        }


                    </div>
                </div>
            </div>
        </div >
    )
}



Library.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}


export async function getServerSideProps(context) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/library`);
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
