import ChartAdeshboard from "../../componnent/Admin/ChartAdeshboard";
import DetailseDeshboard from "../../componnent/Admin/DetailseDeshboard";
import FutureAdeshboard from "../../componnent/Admin/FutureAdeshboard";
import Layout from "../../componnent/Admin/Layout";
import styles from "../../styles/Admin/Admin.module.css";


export default function Admin({ data, error }) {


    const forFetured = {
        studentLength: data?.student,
        teacherLength: data?.teacher,
        earning: data?.earning,
    }



    if (error) {
        return (
            <div>{error}</div>
        )
    }

    return (

        <div className={styles.adminWrp}>
            <FutureAdeshboard forFetured={forFetured} />

            <ChartAdeshboard />

            <DetailseDeshboard />
        </div>
    )
}



Admin.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}



export async function getStaticProps() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        return {
            props: { data }, // will be passed to the page component as props
            revalidate: 60
        };
    } catch (error) {
        // Handle the error
        console.error("An error occurred:", error);

        // You can return an error page or an error message here if needed
        return {
            props: { error: "An error occurred while fetching data" },
        };
    }
}
