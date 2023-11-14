import Layout from "../../../../componnent/Admin/Layout";
import PaymentItems from "../../../../componnent/Admin/Systems/PaymentItems";
import styles from "../../../../styles/Admin/systems/payment.module.css";

export default function Index({ data }) {

    return (
        <div>
            <div className={styles.pymentWrp}>
                {
                    data?.payment.map((item, index) => {
                        return (
                            <div key={index}>
                                <PaymentItems item={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}



Index.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}


export async function getServerSideProps() {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/systems/payments`);

        if (!res.ok) {
            throw new error();
        }

        const data = await res.json();

        return {
            props: { data }, // will be passed to the page component as props
        }

    } catch (error) {
        // Handle the error
        console.error("An error occurred:", error);

        // You can return an error page or an error message here if needed
        return {
            props: { error: "An error occurred while fetching data" },
        };
    }
}