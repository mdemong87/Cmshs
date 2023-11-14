import Input from "../componnent/Input";
import Select from "../componnent/Select";
import { UseFrom } from "../context/fromContext";
import styles from "../styles/Two.module.css";


export default function Two() {

    const {
        faterName,
        setfaterName,
        moterName,
        setfmoterName,
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
        setmEmail
    } = UseFrom();


    return (
        <div className={styles.teoWrp}>
            <h3 className={styles.subhead}>Gardian Informations</h3>
            <div className={styles.fildErp}>

                <Input setFunction={setfaterName} vl={faterName} name="Father's Name" require="*" />

                <Input setFunction={setfmoterName} vl={moterName} name="Mother's Name" require="*" />

                <Select setFunction={setfOccupation} label="Father Occupation" length='9' value={["Selete Occupation", "Doctor", "Bussiness Man", "Teacher", "Banker", "Politician", "Farmer", "Worker", "Other"]} />

                <Select setFunction={setfmccupation} label="Mother Occupation" length='10' value={["Selete Occupation", "House Holder", "Doctor", "Bussiness Man", "Teacher", "Banker", "Politician", "Farmer", "Worker", "Other"]} />

                <Input setFunction={setfmIncome} vl={fmIncome} name="Father Monthly Income" type="number" />

                <Input setFunction={setmmIncome} vl={mmIncome} name="Mother Monthly Income" type="number" />

                <Input setFunction={setfpNumber} vl={fpNumber} name="Father Phone Number" type="text" require="*" />

                <Input setFunction={setmpNumber} vl={mpNumber} name="Mother Phone Number" type="text" require="*" />

                <Input setFunction={setfEmail} vl={fEmail} name="Father Email" type="email" />

                <Input setFunction={setmEmail} vl={mEmail} name="Mother Email" type="email" />

            </div>
        </div>
    )
}

