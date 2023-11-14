import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../../componnent/Admin/Layout';
import Loding from "../../../componnent/Loding";
import styles from "../../../styles/Admin/result/result.module.css";


export default function Index({ data, error }) {



    const router = useRouter();
    const [year, setyear] = useState("");
    const [examtype, setexamtype] = useState("");
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



        if (year != "" && examtype != "" && file != "" && classnum != "") {

            setisloading(true);

            const res = await fetch("/api/result", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify({ year, examtype, classnum, file })
            });
            const resposns = await res.json();

            router.replace(router.asPath);
            if (resposns.success) {
                toast.success("Resultsheet Upload Successfully");
                setyear('');
                setfile('');
                setclassnum('');
                setexamtype('');
            } else {
                toast.error("Resultsheet Upload Failed");
            }
            setisloading(false);


        } else {
            toast.warn("Please! Enter All Filed");
        }


    }




    async function handleDelete(id) {
        setisloading(true);

        try {
            const res = await fetch(`/api/result/${id}`, {
                method: "DELETE",
            });

            const resposns = await res.json();
            router.replace(router.asPath);
            setisloading(false);

            if (resposns.success) {
                toast.success("Resultsheet Delete Successfully");
            } else {
                toast.error("Resultsheet Delete Failed");

            }
        } catch (error) {
            toast.error("There was a Server Side Problem");
        }
    }


    if (error) {
        return <div>{error}</div>
    }

    if (!data) {
        return <Loding />
    }

    return (
        <div className={styles.allnoticewrp}>
            <ToastContainer position='bottom-left' />
            {isloading && <Loding />}
            <div className={styles.inputWrp}>
                <div>
                    <input value={year} type="number" placeholder="Year" onChange={(e) => setyear(e.target.value)} />

                    <select onChange={(e) => setexamtype(e.target.value)}>
                        <option value={" "}>Exam type *</option>

                        <option value={"1st-Semester"}>1st Semester</option>
                        <option value={"2nd-Semester"}>2nd Semester</option>
                        <option value={"3rd-Semester"}>3rd Semester</option>
                        <option value={"half-year-exam"}>Half Year Exam</option>
                        <option value={"Pre-test"}>Pre test</option>
                        <option value={"test"}>Test</option>
                        <option value={"final"}>Final</option>


                        <option value={"January"}>Monthly January</option>
                        <option value={"February"}>Monthly February</option>
                        <option value={"March"}>Monthly March</option>
                        <option value={"April"}>Monthly April</option>
                        <option value={"May"}>Monthly May</option>
                        <option value={"June"}>Monthly June</option>
                        <option value={"Jully"}>Monthly Jully</option>
                        <option value={"Aguest"}>Monthly Aguest</option>
                        <option value={"September"}>Monthly September</option>
                        <option value={"October"}>Monthly October</option>
                        <option value={"November"}>Monthly November</option>
                        <option value={"December"}>Monthly December</option>
                    </select>


                    <select onChange={(e) => setclassnum(e.target.value)}>
                        <option value={" "}>Selete Class</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                        <option value={"6"}>6</option>
                        <option value={"7"}>7</option>
                        <option value={"8"}>8</option>
                        <option value={"9"}>9</option>
                        <option value={"10"}>10</option>
                    </select>


                </div>

                <div>
                    <input type="file" value={""} onChange={(e) => handlechange(e)} />

                    <button type="submit" onClick={(e) => handleClick(e)}>Add</button>
                </div>

            </div>
            <div className={styles.noticWrp}>
                <div className={styles.heading}>
                    <div>SL.</div>
                    <div>Exam Name</div>
                    <div>Year</div>
                    <div>Class</div>
                    <div>Date</div>
                    <div>Delete</div>
                </div>

                {/* dynamice notice maping here */}

                {
                    data?.result.map((item, index) => {

                        return <div key={index} className={styles.body}>
                            <div>{index + 1}</div>
                            <div>{item.examtype}</div>
                            <div>{item.year}</div>
                            <div>{item.classnum}</div>
                            <div>{item.createdAt}</div>
                            <div><button onClick={() => handleDelete(item._id)}><AiFillDelete className={styles.icons} /></button></div>
                        </div>

                    })
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

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/result`);

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
