import React from 'react';
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiCctv } from "react-icons/bi";
import { BsBookmarkStar } from "react-icons/bs";
import Container from "../componnent/Container";
import styles from "../styles/History.module.css";

export default function History() {
    return (
        <div className={styles.history}>
            <Container>
                <div>
                    <div className={styles.headignWrp}>
                        <h1>Our Facilities</h1>
                        <p>Our school provides state-of-the-art facilities, including modern classrooms, well-equipped labs, a library, sports amenities, and a nurturing environment.</p>
                    </div>
                    <div className={styles.facilityCardWrp}>
                        <div>
                            <BiCctv className={styles.fecolityIcn} />
                            <h3>Security</h3>
                            <ul>
                                <li>24/7 CCTV Controll</li>
                                <li>Surveillance</li>
                                <li>First-Aid Stations</li>
                                <li>Safety Education</li>
                                <li>Emergency Response Plans</li>
                            </ul>
                        </div>
                        <div>
                            <AiOutlineSafetyCertificate className={styles.fecolityIcn} />
                            <h3>Academic</h3>
                            <ul>
                                <li>Library</li>
                                <li>Labs</li>
                                <li>Sports Facilities</li>
                                <li>Music Room</li>
                                <li>Parent-Teacher Meeting Rooms</li>
                            </ul>
                        </div>
                        <div>
                            <BsBookmarkStar className={styles.fecolityIcn} />
                            <h3>Improvement</h3>
                            <ul>
                                <li>Debate</li>
                                <li>Innovation Hub</li>
                                <li>English Practise</li>
                                <li>Honesty</li>
                                <li>Public Speeking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
