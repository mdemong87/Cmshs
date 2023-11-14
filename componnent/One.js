import Input from "../componnent/Input";
import Select from "../componnent/Select";
import { UseFrom } from "../context/fromContext";
import styles from "../styles/One.module.css";


export default function One() {


    const { fName,
        setfName,
        lName,
        setlName,
        bName,
        setbName,
        wadmit,
        setwadmit,
        dateOFbrith,
        setdateOFbrith,
        sContact,
        setsContact,
        brithregi,
        setbrithregi,
        bloodGroup,
        setbloodGroup,
        quata,
        setquata,
        residance,
        setresidance,
        gender,
        setgender,
        religion,
        setreligion

    } = UseFrom();




    return (
        <div className={styles.oneWrp}>
            <h3 className={styles.subhead}>Student's Informations</h3>
            <div className={styles.fildErp}>

                <Input setFunction={setfName} vl={fName} name="Frist Name (English)" require="*" />

                <Input setFunction={setlName} vl={lName} name="Last Name" />

                <Input setFunction={setbName} vl={bName} name="Name (Bangla)" require="*" />


                <Select setFunction={setwadmit} label="Want to Admite" require="*" length='11' value={["Select Class", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",]} selectValue={wadmit} />

                <Select setFunction={setreligion} label="Religion" require="*" length='5' value={["Select Religion", "Islam", "Hindu", "Christan", "Others"]} selectValue={religion} />

                <Select setFunction={setgender} label="Gander" length='3' require="*" value={["Selete Gander", "Male", "Female"]} selectValue={gender} />

                <Input setFunction={setdateOFbrith} vl={dateOFbrith} name="Date of Brith" require="*" type="date" />

                <Input setFunction={setbrithregi} vl={brithregi} name="Brith Reg Number" require="*" type="number" />

                <Select setFunction={setresidance} label="Residence" length='3' value={["Selete Residence", "Residence", "Non-Residence"]} selectValue={residance} />

                <Select setFunction={setquata} label="Quata" length='4' value={["Selete Quata", "None", "Freedom Fighter", "Disable"]} selectValue={quata} />

                <Select setFunction={setbloodGroup} label="Blood Group" length='9' require="*" value={["Select Blood Group", "A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"]} selectValue={bloodGroup} />

                <Input setFunction={setsContact} vl={sContact} name="Student Contact Number" type="text" />

            </div>
        </div>
    )
}

