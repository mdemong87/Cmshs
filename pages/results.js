import React, { useState } from 'react';
import { FiDownload } from "react-icons/fi";
import Container from "../componnent/Container";
import Meta from "../componnent/Meta";
import lcldate from "../helper/localdateConvartet";
import styles from "../styles/result.module.css";


export default function Result({ data, error }) {

    const datas = data.result;
    const [year, setyear] = useState("");
    const [examtype, setexamtype] = useState(" ")
    const [className, setclassName] = useState(" ");

    // filtering teaching position data
    if (datas !== undefined) {
        var filteringData = datas.filter((item) => {
            if (year != "" || examtype != " " || className != " ") {

                if (year != "" && examtype == " " && className == " ") {
                    return item.year == year;
                }
                if (year != "" && examtype != " " && className == " ") {
                    return item.year == year && item.examtype == examtype;
                }
                if (year != "" && examtype != " " && className != " ") {
                    return item.year == year && item.examtype == examtype && item.classnum == className;
                }


            } else {
                return datas;
            }
        });
    } else {
        console.log("myArray is undefined.");
    }

    return (
        <main>
            <Meta title="Result" name="result" content='result' />
            <Container>
                <div className={styles.container}>
                    <h1 style={{
                        textAlign: "center",
                        padding: "10px 0px"
                    }}>All Reults</h1>
                    <div className={styles.routingWrp}>
                        <div className={styles.btnWrp}>
                            <input onChange={(e) => setyear(e.target.value)} type='number' placeholder='Year' />
                            <select disabled={year == " " ? true : false} onChange={(e) => setexamtype(e.target.value)}>
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
                            <select disabled={examtype == " " ? true : false} onChange={(e) => setclassName(e.target.value)}>
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
                            <div className={styles.noticWrp}>
                                <div className={styles.heading}>
                                    <div>SL.</div>
                                    <div>Exam Name</div>
                                    <div>Year</div>
                                    <div>Class</div>
                                    <div>Date</div>
                                    <div>Download</div>
                                </div>

                                {/* dynamice notice maping here */}

                                {

                                    filteringData?.map((item, index) => {

                                        return <div key={index} className={styles.body}>
                                            <div>{index + 1}</div>
                                            <div>{item.examtype}</div>
                                            <div>{item.year}</div>
                                            <div>{item.classnum}</div>
                                            <div>{lcldate(item)}</div>
                                            <div><a href={item.file.secure_url} download target="blank"><FiDownload className={styles.icons} /></a></div>
                                        </div>

                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </main>
    )
}




export async function getStaticProps() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/result`);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        return {
            props: { data }, // will be passed to the page component as props
            revalidate: 60
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
