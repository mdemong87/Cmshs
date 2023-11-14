import forSelete from "../helper/inputChecker/forSelete";
import styles from "../styles/ImputAndSelect.module.css";

export default function Select({ label, require, length, value, setFunction, selectValue }) {


    function seleteHandle(e) {
        const value = e.target.value;
        const name = e.target.name;

        //tracker
        forSelete(name, value, setFunction);


    }






    //componnent part start here
    const item = [];
    for (var i = 0; i < length; i++) {
        const div = <option className={styles.seleItem} value={value[i]}>{value[i]}</option>
        item.push(div);
    }
    return (
        <div className={styles.form} >
            <label className={styles.label}>{label}<b className={styles.require}>{require && require}</b></label>
            <select name={label} onChange={(e) => seleteHandle(e)} value={selectValue} className={styles.selectWrp}>
                {item}
            </select>
        </div>
    )
}

