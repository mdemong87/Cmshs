import React from 'react';
import { FiDownload } from "react-icons/fi";
import lcldate from "../helper/localdateConvartet";
import styles from "../styles/routine.module.css";

export default function RoutingTable({ data }) {

    return (
        <div className={styles.noticWrp}>
            <div className={styles.heading}>
                <div>Catagory</div>
                <div>Class</div>
                <div>Date</div>
                <div>PDF</div>
            </div>


            {/* dynamic routing mapping here*/}

            {
                data.map((item, index) => {
                    return <div key={index} className={styles.body}>
                        <div>{item.catagory}</div>
                        <div>{item.classNumber}</div>
                        <div>{lcldate(item)}</div>
                        <div><a href={item.file.secure_url} download target="blank"><FiDownload className={styles.icons} /></a></div>
                    </div>
                })
            }


        </div>
    )
}
