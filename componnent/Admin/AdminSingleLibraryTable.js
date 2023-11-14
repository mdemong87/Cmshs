import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loding from "../../componnent/Loding";
import styles from "../../styles/Admin/AdminSingleLibrary.module.css";

export default function AdminSingleLibraryTable({ data }) {

    const router = useRouter()
    const [isloading, setisloading] = useState(false);




    async function handleDelete(id) {

        setisloading(true);

        const res = await fetch(`/api/library/${id}`, {
            method: "DELETE",

        });

        const resposns = await res.json();
        router.replace(router.asPath);
        setisloading(false);

        if (resposns.success) {
            toast.success("Book Delete successfully");
        } else {
            toast.warn("Book Delete Failed");
        }

    }


    return (
        <div className={styles.noticWrp}>
            {
                isloading && <Loding />
            }
            <div className={styles.heading}>
                <div>Thumnal</div>
                <div>Title</div>
                <div>Author</div>
                <div>Publisher</div>
                <div>Class</div>
                <div>Genre</div>
                <div>Language</div>
                <div>Subject</div>
                <div>Delete</div>
            </div>


            {/* dynamic routing mapping here*/}

            {
                data?.map((item, index) => {
                    return <div key={index} className={styles.body}>
                        <div>
                            <Image className={styles.imge} width={200} height={200} src={item.thumnals.secure_url} alt={"Employee photo"} />
                        </div>
                        <div>{item.title}</div>
                        <div>{item.author}</div>
                        <div>{item.publisher}</div>
                        <div>{item.classes}</div>
                        <div>{item.catagory}</div>
                        <div>{item.language}</div>
                        <div>{item.subject}</div>
                        <div><button onClick={() => handleDelete(item._id)}><AiFillDelete className={styles.icons} /></button></div>
                    </div>
                })
            }


        </div>
    )
}
