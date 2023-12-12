import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseFrom } from "../context/fromContext";
import forInput from "../helper/inputChecker/forInput";
import styles from "../styles/ImputAndSelect.module.css";

export default function Input({ name, type, require, vl, setFunction }) {

    const { photo, setphoto } = UseFrom();


    function handleChange(e) {


        if (e.target.name !== "Student's Photo") {

            const value = e.target.value;
            const name = e.target.name;
            //tracker
            forInput(name, value, setFunction)

        } else {
            const file = e.target.files[0];
            if (file.size < 200000) {
                const filereacder = new FileReader();
                filereacder.onload = (event) => {
                    setphoto(event.target.result)
                }
                filereacder.readAsDataURL(file);
            } else {
                toast.warn("File Size is too Large.Keep it is Less then 200 KB");
            }

        }

    }


    return (
        <div className={styles.form}>

            <label className={styles.label}>{name}<b className={styles.require}>{require && require}</b> </label>

            <input onChange={(e) => handleChange(e)} name={name} className={styles.input} required={require} type={type ? type : "text"} value={vl} accept="image/png,image/jpeg,image/jpg" />

        </div>
    )
}

