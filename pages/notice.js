import Container from "../componnent/Container";
import Meta from "../componnent/Meta";
import Notic from "../componnent/Notic";
import styles from "../styles/Notice.module.css";


export default function Notice({ data, error }) {


    return (
        <main className={styles.container}>
            <Meta title="Notice || Chandash Mokhdum Shah High School" />
            <Container>
                <h1 style={{
                    textAlign: "center",
                    padding: "10px 0px"
                }}>All Notices</h1>
                <div className={styles.notice}>
                    <Notic data={data} error={error} />
                </div>
            </Container>
        </main>
    )

}



export async function getStaticProps() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notice`);

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
