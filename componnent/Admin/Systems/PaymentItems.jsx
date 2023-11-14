import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from "../../../styles/Admin/systems/paymentItems.module.css";
import Loding from "../../Loding";



export default function PaymentItems({ item }) {


    //systems variable
    const [isloading, setisloading] = useState(false);
    const [disable, setdisable] = useState(true);

    //data variable
    const [monthly, setMonthly] = useState(item.Monthly);
    const [exam, setExam] = useState(item.Exam);
    const [section, setSection] = useState(item.Section);
    const [course, setCourse] = useState(item.Course);
    const [markshit, setMarkshit] = useState(item.Markshit);
    const [registrations, setRegistrations] = useState(item.Registrations);
    const [testimonial, setTestimonial] = useState(item.Testimonial);
    const [departmentChange, setDepartmentChange] = useState(item.DepartmentChange);
    const [admission, setAdmission] = useState(item.Admission);
    const [admissionFrom, setAdmissionFrom] = useState(item.AdmissionFrom);
    const [others, setOthers] = useState(item.Others);
    const [oralExam, setOralExam] = useState(item.OralExam);
    const [central, setCentral] = useState(item.Central);
    const [internalSports, setInternalSports] = useState(item.InternalSports);
    const [nationalSports, setNationalSports] = useState(item.NationalSports);
    const [commonRoom, setCommonRoom] = useState(item.commonRoom);
    const [magagin, setMagagin] = useState(item.Magagin);
    const [instituteDepartment, setInstituteDepartment] = useState(item.InstituteDepartment);
    const [library, setLibrary] = useState(item.Library);
    const [labratory, setLabratory] = useState(item.Labratory);
    const [fine, setFine] = useState(item.Fine);
    const [utility, setUtility] = useState(item.utility);
    const [welcomeFree, setWelcomeFree] = useState(item.WelcomeFree);
    const [educationalTravel, setEducationalTravel] = useState(item.EducationlTravel);
    const [delay, setDelay] = useState(item.Delay);




    const schemaState = {
        monthly,
        exam,
        section,
        course,
        markshit,
        registrations,
        testimonial,
        departmentChange,
        admission,
        admissionFrom,
        others,
        oralExam,
        central,
        internalSports,
        nationalSports,
        commonRoom,
        magagin,
        instituteDepartment,
        library,
        labratory,
        fine,
        utility,
        welcomeFree,
        educationalTravel,
        delay,
    };


    async function hanldesave(id, classes) {
        setisloading(true);

        try {
            // Spread the properties of schemaState directly
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/systems/payments`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, classes, schemaState }), // Spread the properties
            });

            const res = await response.json();
            if (res.success) {
                setisloading(false);
                toast.success(res.message);
                setdisable(!disable);
            } else {
                setisloading(false);
                toast.error(res.message);
                setdisable(!disable);
            }
        } catch (error) {
            console.log(error);
            setisloading(true);
            toast.error(res.message);
            setdisable(!disable);
        }
    }




    return (
        <div className={styles.wrper}>
            {isloading && <Loding />}
            <div className={styles.titleWrp}>
                <h1>Class: {item.classes}</h1>
                <div className={styles.btnWrp}>
                    <button onClick={() => setdisable(!disable)} className={styles.edite}>Edit</button>
                    <button disabled={disable} onClick={() => hanldesave(item._id, item.classes)} className={styles.save}>Save</button>
                </div>
            </div>
            <div className={styles.itemsWrper}>
                <div>
                    <h4>Monthly Free</h4>
                    <input onChange={(e) => setMonthly(e.target.value)} value={monthly} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Exam Free</h4>
                    <input onChange={(e) => setExam(e.target.value)} value={exam} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Section Free</h4>
                    <input onChange={(e) => setSection(e.target.value)} value={section} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Course Free</h4>
                    <input onChange={(e) => setCourse(e.target.value)} value={course} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Markshit Free</h4>
                    <input onChange={(e) => setMarkshit(e.target.value)} value={markshit} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Registrations Free</h4>
                    <input onChange={(e) => setRegistrations(e.target.value)} value={registrations} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Testimonial Free</h4>
                    <input onChange={(e) => setTestimonial(e.target.value)} value={testimonial} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Department Change Free</h4>
                    <input onChange={(e) => setDepartmentChange(e.target.value)} value={departmentChange} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Admission Free</h4>
                    <input onChange={(e) => setAdmission(e.target.value)} value={admission} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Admission from Free</h4>
                    <input onChange={(e) => setAdmissionFrom(e.target.value)} value={admissionFrom} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Others Free</h4>
                    <input onChange={(e) => setOthers(e.target.value)} value={others} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Oral Exam Free</h4>
                    <input onChange={(e) => setOralExam(e.target.value)} value={oralExam} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Central Free</h4>
                    <input onChange={(e) => setCentral(e.target.value)} value={central} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Internal sports Free</h4>
                    <input onChange={(e) => setInternalSports(e.target.value)} value={internalSports} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>National sports Free</h4>
                    <input onChange={(e) => setNationalSports(e.target.value)} value={nationalSports} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>common Romm Free</h4>
                    <input onChange={(e) => setCommonRoom(e.target.value)} value={commonRoom} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Magagin Free</h4>
                    <input onChange={(e) => setMagagin(e.target.value)} value={magagin} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Institute department Free</h4>
                    <input onChange={(e) => setInstituteDepartment(e.target.value)} value={instituteDepartment} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Library Free</h4>
                    <input onChange={(e) => setLibrary(e.target.value)} value={library} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Labratory Free</h4>
                    <input onChange={(e) => setLabratory(e.target.value)} value={labratory} type="number" disabled={disable} />
                </div>
                <div>
                    <h4> Fine</h4>
                    <input onChange={(e) => setFine(e.target.value)} value={fine} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Electricty/Gas/Water</h4>
                    <input onChange={(e) => setUtility(e.target.value)} value={utility} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>New Student Welcome free</h4>
                    <input onChange={(e) => setWelcomeFree(e.target.value)} value={welcomeFree} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Educationl Travel</h4>
                    <input onChange={(e) => setEducationalTravel(e.target.value)} value={educationalTravel} type="number" disabled={disable} />
                </div>
                <div>
                    <h4>Delay free</h4>
                    <input onChange={(e) => setDelay(e.target.value)} value={delay} type="number" disabled={disable} />
                </div>
            </div>
            <ToastContainer position="bottom-left" />
        </div >
    )
}
