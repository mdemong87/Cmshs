import styles from "../styles/RequiredInfo.module.css";


function RequiredInfo({ text }) {
    return (
        <div className={styles.small}>
            <small>{text}</small>
        </div>
    )
}

export default RequiredInfo;