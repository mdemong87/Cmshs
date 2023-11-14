import { useRouter } from 'next/router';
import React from 'react';
import Failed from "../../componnent/Failed";
import Success from "../../componnent/Success";



export default function ShurjoPayResponse({ data }) {

    const router = useRouter();


    return (
        <div>
            {data?.success ? <Success downloadData={data.res} /> : <Failed />}
        </div>
    )
}



export async function getServerSideProps(context) {

    const { order_id } = context.query;

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/paymentwithshurjopay/${order_id}`);

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