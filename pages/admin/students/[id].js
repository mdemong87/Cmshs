import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "../../../componnent/Admin/Layout";
import EditRouteInputer from "../../../componnent/EditRouteInputer";
import Loding from "../../../componnent/Loding";
import calculateAge from "../../../helper/agecalculator";
import lcldate from "../../../helper/localdateConvartet";
import styles from "../../../styles/Admin/SingleStudentWrper.module.css";

export default function Index({ data }) {


    //system variable
    const router = useRouter();
    const [disable, setdisable] = useState(true);
    const [loading, setloading] = useState(false);


    //data variable
    const [fristName, setfristName] = useState(data.fName);
    const [lastName, setlastName] = useState(data.lName);
    const [bName, setbName] = useState(`${data.bName}`);
    const [roll, setroll] = useState(data.roll);
    const [id, setid] = useState(data.customid);
    const [clas, setclas] = useState(data.wadmit);
    const [gander, setgander] = useState(data.gender);
    const [blood, setblood] = useState(data.bloodGroup);
    const [brithdate, setbrithdate] = useState(data.dateOFbrith);
    const [brithReg, setbrithReg] = useState(data.brithregi);
    const [riligion, setriligion] = useState(data.religion);
    const [registration, setregistration] = useState(data.registration);
    const [sContactNumber, setsContactNumber] = useState(data.sContact);
    const [fName, setfName] = useState(data.faterName);
    const [mName, setmName] = useState(data.moterName);
    const [fOccupation, setfOccupation] = useState(data.fOccupation);
    const [mOccupation, setmOccupation] = useState(data.mOccupation);
    const [fmIncome, setfmIncome] = useState(data.fmIncome);
    const [mmIncome, setmmIncome] = useState(data.mmIncome);
    const [fPhoneN, setfPhoneN] = useState(data.fpNumber);
    const [mPhoneN, setmPhoneN] = useState(data.mpNumber);
    const [fEmail, setfEmail] = useState(data.fEmail);
    const [mEmail, setmEmail] = useState(data.mEmail);
    const [prCountry, setprCountry] = useState(data.prCountry);
    const [prDivision, setprDivision] = useState(data.prDivision);
    const [prDistrict, setprDistrict] = useState(data.prDistrict);
    const [prUpazila, setprUpazila] = useState(data.prUpazila);
    const [prUnion, setprUnion] = useState(data.prUnion);
    const [prPostOffice, setprPostOffice] = useState(data.prPost);
    const [prVillage, setprVillage] = useState(data.prVillage);
    const [psCountry, setpsCountry] = useState(data.psCountry);
    const [psDivision, setpsDivision] = useState(data.psDivision);
    const [psDistrict, setpsDistrict] = useState(data.psDistrict);
    const [psUpazila, setpsUpazila] = useState(data.psUpazila);
    const [psUnion, setpsUnion] = useState(data.psUnion);
    const [psPostOffice, setpsPostOffice] = useState(data.psPost);
    const [psVillage, setpsVillage] = useState(data.psVillage);
    const [familyCnumber, setfamilyCnumber] = useState(data.familyCall);
    const [quata, setquata] = useState(data.quata);
    const [residance, setresidance] = useState(data.residance);







    //update data defind in an a object
    const updateData = {
        fName: fristName,
        lName: lastName,
        bName: bName,
        bloodGroup: blood,
        dateOFbrith: brithdate,
        brithregi: brithReg,
        gender: gander,
        quata: quata,
        wadmit: clas,
        sContact: sContactNumber,
        faterName: fName,
        moterName: mName,
        religion: riligion,
        residance: residance,
        fOccupation: fOccupation,
        mOccupation: mOccupation,
        fmIncome: fmIncome,
        mmIncome: mmIncome,
        fpNumber: fPhoneN,
        mpNumber: mPhoneN,
        fEmail: fEmail,
        mEmail: mEmail,
        familyCall: familyCnumber,
        prCountry: prCountry,
        prDistrict: prDistrict,
        prDivision: prDivision,
        prPost: psPostOffice,
        prUnion: prUnion,
        prUpazila: prUpazila,
        prVillage: prVillage,
        psCountry: psCountry,
        psDistrict: psDistrict,
        psDivision: psDivision,
        psPost: psPostOffice,
        psUnion: psUnion,
        psUpazila: psUpazila,
        psVillage: psVillage,
        registration: registration,
        roll: roll
    }








    //handle edite button
    function edithandler() {
        if (disable) {
            setdisable(false);
        } else {
            setdisable(true);
        }
    }


    //handle save function 
    async function savehandler(id) {
        setloading(true);
        const respons = await fetch(`/api/students/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
        })

        const respond = await respons.json();
        router.replace(router.asPath);
        setdisable(true);
        setloading(false);
        if (respond.success) {
            toast.success(respond.message);
        } else {
            toast.error(respond.error);
        }
    }

    //handle delete button
    async function deletehandler(id) {
        const isConfirm = confirm("Are You Sure to Delete This Record?");
        if (isConfirm) {
            const res = await fetch(`/api/students/${id}`, {
                method: "DELETE"
            });
            const resdata = await res.json();

            if (resdata.success) {
                toast.success("Student Recoard Delete Successfully");
                router.push("/admin/students");
            } else {
                toast.error("Student Recoard Delete Failed");
            }
        }
    }


    return (

        <div>
            <div className={styles.btnWrper}>
                {loading && <Loding />}
                <div>
                    <div>
                        <button style={!disable ? { background: "rgb(167, 167, 33)" } : { background: "green" }} onClick={() => edithandler()}>{disable ? "Edit" : "Cencle"}</button>


                        {!disable && <button style={{ background: "green" }} onClick={() => savehandler(data._id)}>Save</button>}
                    </div>
                    <div>
                        <button onClick={() => deletehandler(data._id)}>Delete</button>
                    </div>
                </div>
            </div>
            <div className={styles.SingleWrper}>
                <div className={styles.upprofile}>
                    <div>
                        <div className={styles.profile}>
                            <Image className={styles.img} src={data?.file?.secure_url} height={"100"} width={"100"} priority={true} alt="single Profile" />
                        </div>
                        <div className={styles.topDetails}>
                            <div>
                                <b>Id:</b>
                                <EditRouteInputer type={"text"} data={id} setData={setid} disable={true} />
                            </div>
                            <div>
                                <b> Frist Name:</b>
                                <EditRouteInputer type={"text"} data={fristName} setData={setfristName} disable={disable} />
                            </div>
                            <div>
                                <b> Last Name:</b>
                                <EditRouteInputer type={"text"} data={lastName} setData={setlastName} disable={disable} />
                            </div>
                            <div>
                                <b>Name(Bangla): </b>
                                <EditRouteInputer type={"text"} data={bName} setData={setbName} disable={disable} />
                            </div>
                            <div>
                                <b>Roll:</b>
                                <EditRouteInputer type={"number"} data={roll} setData={setroll} disable={disable} />
                            </div>
                            <div>
                                <b>Class:</b>
                                <EditRouteInputer type={"text"} data={clas} setData={setclas} disable={disable} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.studeinfoTopadditialtionWrp}>
                        <div>
                            <b>Age:</b>
                            <EditRouteInputer type={"text"} data={calculateAge(brithdate)} disable={true} />
                        </div>

                        <div>
                            <b>Date of Brith:</b>
                            <EditRouteInputer type={"text"} data={brithdate} setData={setbrithdate} disable={disable} />
                        </div>
                        <div>
                            <b>Brith Reg.No:</b>
                            <EditRouteInputer type={"text"} data={brithReg} setData={setbrithReg} disable={disable} />
                        </div>
                        <div>
                            <b>Gender:</b>
                            <EditRouteInputer type={"text"} data={gander} setData={setgander} disable={disable} />
                        </div>
                        <div>
                            <b>Blood Group:</b>
                            <EditRouteInputer type={"text"} data={blood} setData={setblood} disable={disable} />
                        </div>
                        <div>
                            <b>Religion:</b>
                            <EditRouteInputer type={"text"} data={riligion} setData={setriligion} disable={disable} />
                        </div>
                        <div>
                            <b>Registration Number:</b>
                            <EditRouteInputer type={"number"} data={registration} setData={setregistration} disable={disable} />
                        </div>
                        <div>
                            <b>Quata:</b>
                            <EditRouteInputer type={"text"} data={quata} setData={setquata} disable={disable} />
                        </div>
                        <div>
                            <b>Residence:</b>
                            <EditRouteInputer type={"text"} data={residance} setData={setresidance} disable={disable} />
                        </div>
                        <div>
                            <b>Student Contact:</b>
                            <EditRouteInputer type={"text"} data={sContactNumber} setData={setsContactNumber} disable={disable} />
                        </div>
                        <div>
                            <b>Family Phone Number:</b>
                            <EditRouteInputer type={"text"} data={familyCnumber} setData={setfamilyCnumber} disable={disable} />
                        </div>
                        <div>
                            <b>Admission Date:</b>
                            <EditRouteInputer type={"text"} data={lcldate(data)} setData={setfristName} disable={true} />
                        </div>
                    </div>
                </div>
                <div className={styles.downDetails}>
                    <h2>Gardian Informations</h2>
                    <div>
                        <div className={styles.details}>
                            <b>Father&apos;s Name:</b>
                            <EditRouteInputer type={"text"} data={fName} setData={setfName} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Mother&apos;s Name:</b>
                            <EditRouteInputer type={"text"} data={mName} setData={setmName} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Father&apos; Occupation:</b>
                            <EditRouteInputer type={"text"} data={fOccupation} setData={setfOccupation} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Mother&apos; Occupation:</b>
                            <EditRouteInputer type={"text"} data={mOccupation} setData={setmOccupation} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Father Monthly Income:</b>
                            <EditRouteInputer type={"text"} data={fmIncome} setData={setfmIncome} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Mother Monthly Income:</b>
                            <EditRouteInputer type={"text"} data={mmIncome} setData={setmmIncome} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Father Phone Number:</b>
                            <EditRouteInputer type={"text"} data={fPhoneN} setData={setfPhoneN} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Mother Phone Number:</b>
                            <EditRouteInputer type={"text"} data={mPhoneN} setData={setmPhoneN} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Father Email:</b>
                            <EditRouteInputer type={"text"} data={fEmail} setData={setfEmail} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Mother Email:</b>
                            <EditRouteInputer type={"text"} data={mEmail} setData={setmEmail} disable={disable} />
                        </div>
                    </div>
                </div>




                <div className={styles.downDetails}>
                    <h2>Present Address</h2>
                    <div>
                        <div className={styles.details}>
                            <b>Country:</b>
                            <EditRouteInputer type={"text"} data={psCountry} setData={setpsCountry} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Division: </b>
                            <EditRouteInputer type={"text"} data={psDivision} setData={setpsDivision} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>District:</b>
                            <EditRouteInputer type={"text"} data={psDistrict} setData={setpsDistrict} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Upazila:</b>
                            <EditRouteInputer type={"text"} data={psUpazila} setData={setpsUpazila} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Union Council:</b>
                            <EditRouteInputer type={"text"} data={psUnion} setData={setpsUnion} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Post Office:</b>
                            <EditRouteInputer type={"text"} data={psPostOffice} setData={setpsPostOffice} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Village:</b>
                            <EditRouteInputer type={"text"} data={psVillage} setData={setpsVillage} disable={disable} />
                        </div>
                    </div>
                </div>

                <div className={styles.downDetails}>
                    <h2>Parmanent Address</h2>
                    <div>
                        <div className={styles.details}>
                            <b>Country:</b>
                            <EditRouteInputer type={"text"} data={prCountry} setData={setprCountry} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Division: </b>
                            <EditRouteInputer type={"text"} data={prDivision} setData={setprDivision} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>District:</b>
                            <EditRouteInputer type={"text"} data={prDistrict} setData={setprDistrict} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Upazila:</b>
                            <EditRouteInputer type={"text"} data={prUpazila} setData={setprUpazila} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Union Council:</b>
                            <EditRouteInputer type={"text"} data={prUnion} setData={setprUnion} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Post Office:</b>
                            <EditRouteInputer type={"text"} data={prPostOffice} setData={setprPostOffice} disable={disable} />
                        </div>
                        <div className={styles.details}>
                            <b>Village:</b>
                            <EditRouteInputer type={"text"} data={prVillage} setData={setprVillage} disable={disable} />
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer position="bottom-left" />
        </div >

    )
}


Index.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}


export async function getServerSideProps(context) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/students/${context.params.id}`);
    const data = await res.json();

    return {
        props: { data }
    }
}