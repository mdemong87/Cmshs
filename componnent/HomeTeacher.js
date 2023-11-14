import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Container from "../componnent/Container";
import styles from "../styles/HomeTeacher.module.css";

export default function HomeTeacher(data) {

    const filtering = data.teacherdata?.employee.filter((item) => {
        return item.catagory == "Teacher";
    })



    return (
        <section className={styles.homeTeacher}>
            <Container>
                <div>
                    <div className={styles.headignWrp}>
                        <h1>Our Teachers</h1>
                        <p>Our dedicated teachers are experienced and committed to nurturing students' potential, offering a supportive and engaging learning experience.</p>
                    </div>
                    <div className={styles.teacherCardWrp}>
                        {
                            filtering.slice(0, 3).map((item, index) => {
                                return <div key={index}>
                                    <Image className={styles.teacherprofile} src={item.file.secure_url} alt='teacher-profile' height={500} width={400} />
                                    <div className={styles.layer}>
                                        <b>
                                            <h2>{item.name}</h2>
                                            <p>{item.position}</p>
                                        </b>
                                        <div>
                                            <div>
                                                <AiFillPhone className={styles.socilIcon} />
                                            </div>
                                            <div>
                                                <FaFacebookF className={styles.socilIcon} />
                                            </div>
                                            <div>
                                                <AiTwotoneMail className={styles.socilIcon} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
                <div className={styles.viewAllbtnWrp}>
                    <Link className={styles.viewAllbtn} href={"/employee"} >
                        <span>View All</span>
                    </Link>
                </div>
            </Container>
        </section>
    )
}
