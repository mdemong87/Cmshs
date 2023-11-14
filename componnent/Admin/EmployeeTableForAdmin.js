import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import styles from "../../styles/Admin/exployee/EmployeeTableForAdmin.module.css";

export default function EmployeeTableForClient({ data }) {

    const router = useRouter()
    const [isloading, setisloading] = useState(false);





    async function handleDelete(id) {

        setisloading(true);

        const res = await fetch(`/api/employee/${id}`, {
            method: "DELETE",

        });

        const resposns = await res.json();
        router.replace(router.asPath);
        setisloading(false);

        if (resposns.success) {
            alert("Employee Delete successfully");
        } else {
            alert("Employee does't Delete successfully.");
        }

    }


    return (
        <div className={styles.noticWrp}>
            <div className={styles.heading}>
                <div>Photo</div>
                <div>Id</div>
                <div>Name</div>
                <div>Age</div>
                <div>Catagory</div>
                <div>Position</div>
                <div>Edu.Qulafication</div>
                <div>Phone</div>
                <div>Email</div>
                <div>Address</div>
                <div>Delete</div>
            </div>


            {/* dynamic routing mapping here*/}

            {
                data?.map((item, index) => {
                    return <div key={index} className={styles.body}>
                        <div>
                            <Image className={styles.imge} width={200} height={200} src={item.file.secure_url} alt={"Employee photo"} />
                        </div>
                        <div>{item?.customid}</div>
                        <div>{item.name}</div>
                        <div>{item.age}</div>
                        <div>{item.catagory}</div>
                        <div>{item.position}</div>
                        <div>{item.edu}</div>
                        <div>{item.phone}</div>
                        <div>{item.email}</div>
                        <div>{item.address}</div>
                        <div><button onClick={() => handleDelete(item._id)}><AiFillDelete className={styles.icons} /></button></div>
                    </div>
                })
            }


        </div>
    )
}
