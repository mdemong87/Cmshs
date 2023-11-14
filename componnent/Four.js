import Input from "../componnent/Input";
import { UseFrom } from "../context/fromContext";
import styles from "../styles/Four.module.css";
import RequiredInfo from "./RequireInfo";

export default function Four() {

    const {
        familyCall,
        setfamilyCall,
        photo,
        setphoto
    } = UseFrom();


    return (
        <div className={styles.teoWrp}>
            <h3 className={styles.subhead}>Contact Informations</h3>
            <div className={styles.fildErp}>

                <Input setFunction={setfamilyCall} vl={familyCall} name="Emergency Contact Number" require="*" />
                <div>
                    <RequiredInfo text="Only ( JPG,GPEG,PNG ) and Width Hiight 300*400 and Miximam file size 200KB ( Required )" />
                    <Input setFunction={setphoto} vl={""} name="Student's Photo" type="file" require="*" />

                </div>

            </div>
        </div>
    )
}
