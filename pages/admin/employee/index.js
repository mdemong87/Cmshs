import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import EmployeeTableForClient from "../../../componnent/Admin/EmployeeTableForAdmin";
import Layout from '../../../componnent/Admin/Layout';
import Loding from "../../../componnent/Loding";
import styles from "../../../styles/Admin/exployee/employee.module.css";


export default function Employee({ data, error }) {


    //re-asign data
    const datas = data?.employee;
    //state diclear
    const router = useRouter();
    const [catagory, setcatagory] = useState("");
    const [file, setfile] = useState("");
    const [name, setname] = useState('');
    const [age, setage] = useState("");
    const [position, setposition] = useState('');
    const [address, setaddress] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [edu, setedu] = useState();
    const [isloading, setisloading] = useState(false);
    const [tabInctregateer, settabInctregateer] = useState(2);


    // filtering teaching position data
    const teacherData = datas.filter((item) => {
        return item.catagory == "Teacher";
    });

    //filtering commite position data
    const commiteData = datas.filter((item) => {
        return item.catagory == "commite";
    });

    //filtering staff position data
    const staffData = datas.filter((item) => {
        return item.catagory == "Staff";
    });

    const FounderData = datas.filter((item) => {
        return item.catagory == "Founder";
    });


    function handlechange(e) {
        const file = e.target.files[0];
        if (file.size < 200000) {
            const filereacder = new FileReader();
            filereacder.onload = (event) => {
                setfile(event.target.result)
            }
            filereacder.readAsDataURL(file);
        } else {
            toast.warn("File Size is too Large.Keep it is Less the 200 KB");
        }

    }

    async function handleClick(e) {

        if (catagory != '' && age != '' && file != '' && name != '' && position != " " && address != " " && phone != " " && edu != " ") {

            setisloading(true);

            const res = await fetch("/api/employee", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify({ catagory, name, age, position, address, phone, email, edu, file })
            });
            const resposns = await res.json();
            router.replace(router.asPath);
            if (resposns.success) {
                toast.success("Employee Added Successfully");
                setcatagory('');
                setfile('');
                setage('');
                setaddress('');
                setedu("");
                setemail('');
                setname("");
                setphone('');
                setposition("");
            } else {
                toast.error("Employee Added Failed");
            }
            setisloading(false);
        } else {
            toast.warn("Please! Fill All Input Filed");
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
            toast.success("Employee Delete Successfully");
        } else {
            toast.error("Employee Delete Failed");
        }

    }

    return (
        <div>
            <div className={styles.container}>

                {isloading && <Loding />}
                <div className={styles.inputWrp}>

                    <input value={name} type="text" placeholder="Enter Name" onChange={(e) => setname(e.target.value)} />

                    <input value={age} type="number" placeholder="Age" onChange={(e) => setage(e.target.value)} />

                    <select value={catagory} onChange={(e) => setcatagory(e.target.value)}>
                        <option value=''>select Catagory</option>
                        <option value='commite'>Commite</option>
                        <option value='Teacher'>Teacher</option>
                        <option value='Staff'>Staff</option>
                        <option value='Founder'>Founder</option>
                    </select>

                    <input value={position} type="text" placeholder="Enter position" onChange={(e) => setposition(e.target.value)} />


                    <input value={edu} type="text" placeholder="Educational qulification" onChange={(e) => setedu(e.target.value)} />


                    <input value={phone} type="text" placeholder="Enter phone number" onChange={(e) => setphone(e.target.value)} />


                    <input value={email} type="email" placeholder="Enter Email address" onChange={(e) => setemail(e.target.value)} />


                    <input value={address} type="text" placeholder="Enter address" onChange={(e) => setaddress(e.target.value)} />

                </div>
                <div className={styles.secinputWrp}>
                    <input type="file" value={''} onChange={(e) => handlechange(e)} />
                    <button type="submit" onClick={(e) => handleClick(e)}>Add</button>
                </div>

                <div className={styles.routingWrp}>
                    <div className={styles.btnWrp}>
                        <button onClick={() => settabInctregateer(1)} className={tabInctregateer == 1 ? styles.activebtn : null}>Commite</button>
                        <button onClick={() => settabInctregateer(2)} className={tabInctregateer == 2 ? styles.activebtn : null}>Teacher</button>
                        <button onClick={() => settabInctregateer(3)} className={tabInctregateer == 3 ? styles.activebtn : null}>Staff</button>
                        <button onClick={() => settabInctregateer(4)} className={tabInctregateer == 4 ? styles.activebtn : null}>Founder</button>
                    </div>
                    <div>

                        {

                            tabInctregateer == 1 ? < EmployeeTableForClient data={commiteData} /> : tabInctregateer == 2 ? <EmployeeTableForClient data={teacherData} /> : tabInctregateer == 3 ? <EmployeeTableForClient data={staffData} /> : <EmployeeTableForClient data={FounderData} />

                        }


                    </div>
                </div>
            </div>
            <ToastContainer position='bottom-left' />
        </div>
    )
}



Employee.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}


export async function getServerSideProps(context) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/employee`);
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
