import Layout from "../../../../componnent/Admin/Layout";
import styles from "../../../../styles/Admin/systems/marquee.module.css";

export default function index() {
    return (
        <div className={styles.marqueeWrp}>
            <h1>This route is under developing.it will be added here very soon.Thank you.</h1>
        </div>
    )
}



index.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}