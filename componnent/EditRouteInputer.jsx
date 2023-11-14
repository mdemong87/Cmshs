import styles from "../styles/EditRouteUpdater.module.css";

export default function EditRouteInputer({ data, setData, type, disable }) {
    return (
        <input disabled={disable} className={styles.inputer} type={type} value={data} onChange={(e) => setData(e.target.value)} />
    )
}
