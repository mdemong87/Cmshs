import React from 'react';
import Layout from "../../../../componnent/Admin/Layout";

export default function Payment() {
    return (
        <div>
            <h1>This route in under development.It will be added here very soon</h1>
        </div>
    )
}





Payment.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}
