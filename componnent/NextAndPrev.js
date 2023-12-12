
import { useRouter } from "next/router";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseFrom } from "../context/fromContext";
import styles from "../styles/NextAndPrev.module.css";


export default function NextAndPrev({ setrander, rander, loding, setloding }) {

    const router = useRouter();



    const { fName,
        setfName,
        lName,
        setlName,
        bName,
        setbName,
        wadmit,
        setwadmit,
        faterName,
        setfaterName,
        moterName,
        setfmoterName,
        sContact,
        setsContact,
        brithregi,
        setbrithregi,
        dateOFbrith,
        setdateOFbrith,
        bloodGroup,
        setbloodGroup,
        quata,
        setquata,
        residance,
        setresidance,
        gender,
        setgender,
        religion,
        setreligion,
        fOccupation,
        setfOccupation,
        mOccupation,
        setfmccupation,
        fmIncome,
        setfmIncome,
        mmIncome,
        setmmIncome,
        fpNumber,
        setfpNumber,
        mpNumber,
        setmpNumber,
        fEmail,
        setfEmail,
        mEmail,
        setmEmail,
        prCountry,
        setprCountry,
        prDivision,
        setprDivision,
        prDistrict,
        setprDistrict,
        prUpazila,
        setprUpazila,
        prUnion,
        setprUnion,
        prPost,
        setprPost,
        prVillage,
        setprVillage,
        psCountry,
        setpsCountry,
        psDivision,
        setpsDivision,
        psDistrict,
        setpsDistrict,
        psUpazila,
        setpsUpazila,
        psUnion,
        setpsUnion,
        psPost,
        setpsPost,
        psVillage,
        setpsVillage,
        familyCall,
        setfamilyCall,
        photo,
        setphoto,
        res,
        setres } = UseFrom();

    const from_data = {
        fName,

        lName,

        bName,

        wadmit,

        faterName,

        moterName,

        sContact,

        brithregi,

        dateOFbrith,

        bloodGroup,

        quata,

        residance,

        gender,

        religion,

        fOccupation,

        mOccupation,

        fmIncome,

        mmIncome,

        fpNumber,

        mpNumber,

        fEmail,

        mEmail,

        prCountry,

        prDivision,

        prDistrict,

        prUpazila,

        prUnion,

        prPost,

        prVillage,

        psCountry,

        psDivision,

        psDistrict,

        psUpazila,

        psUnion,

        psPost,

        psVillage,

        familyCall,

        photo,

    }






    function handliIClick(e) {
        e.preventDefault()


        setrander((prev) => {
            return prev + 1;
        })

    }


    function handliDClick(e) {
        e.preventDefault()
        setrander((pre) => {
            return pre - 1;
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();


        if (fName == '' || bName == '' || wadmit == '' || wadmit == "Select Class" || religion == '' || religion == "Select Religion" || gender == '' || gender == "Selete Gander" || dateOFbrith == '' || brithregi == '' || faterName == '' || moterName == '' || fpNumber == '' || mpNumber == '' || prCountry == '' || prCountry == "Selete Country" || prDivision == "Selete Division" || prDivision == '' || prDistrict == '' || prUpazila == '' || prUnion == '' || prPost == '' || prVillage == '' || psCountry == '' || psCountry == "Selete Country" || psDivision == "Selete Division" || psDivision == '' || psDistrict == '' || psUpazila == '' || psUnion == '' || psPost == '' || psVillage == '' || familyCall == '' || photo == '') {

            //react-rostify warning throw from here when the required filed is clear
            toast.warn("Please! Fillup All Required Fileds");


        } else {
            setloding(true);
            const res = await fetch("/api/students", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify(from_data)
            });



            const resposns = await res.json();
            setres(resposns);
            setloding(false);
            console.log(resposns);
            if (resposns.success) {
                toast.success(resposns.message);
                router.push("/ragistration/download");
            } else {
                toast.error(resposns.error);
            }
        }

    }

    return (
        <div>
            <div className={styles.nextandPrevWrp}>
                <button className={styles.button} disabled={rander === 1} onClick={(e) => handliDClick(e)}>Prev</button>
                {rander !== 4 ? <button className={styles.button} disabled={rander === 4} onClick={(e) => handliIClick(e)}>Next</button> : <button className={styles.button} type="submit" disabled={loding} onClick={(e) => handleSubmit(e)}>Submit</button>}
            </div>
            <ToastContainer position="top-center" />
        </div>
    )

}
