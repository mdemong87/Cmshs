import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "../../../../componnent/Admin/Layout";
import styles from "../../../../styles/Admin/systems/marquee.module.css";



export default function Index({ data, error }) {


    const allmarquee = data?.marquee;
    const router = useRouter();
    const [text, settext] = useState("");


    //handle add function
    async function hanldeClick(e) {

        if (text != "") {

            const mytext = {
                text: text
            }

            const res = await fetch("/api/systems/marquee", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify(mytext)
            });
            const resposns = await res.json();
            if (resposns.success) {
                toast.success("Marquee Info Add Successfully");
                router.replace(router.asPath);
                settext("");

            } else {
                toast.error("Marquee Info Added Failed");
            }


        } else {
            toast.warn("Please! Add Some Info");
        }

    }







    //handle delete function
    async function handleDeleteClick(id) {
        const res = await fetch(`/api/systems/marquee/${id}`, {
            method: "DELETE",

        });

        const resposns = await res.json();
        if (resposns.success) {
            toast.success(resposns.message);
            router.replace(router.asPath);
        } else {
            toast.error("Marquee Delete Failed");
        }

    }




    return (
        <div className={styles.marqueeWrp}>
            <div className={styles.inputWrp}>
                <textarea onChange={(e) => settext(e.target.value)} value={text} placeholder="Write the Marquee..." />
                <button onClick={(e) => hanldeClick(e)}>Add</button>

            </div>
            <div className={styles.lineWrp}>



                {allmarquee?.map((item, index) => {

                    return <div key={index}>
                        <marquee behavior="scroll" direction="left">{item.marquee}</marquee>
                        <button onClick={(e) => handleDeleteClick(item
                            ._id)}>Delete</button>
                    </div>
                })}


            </div>
            <ToastContainer position="bottom-left" />
        </div>
    )
}



Index.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}


export async function getServerSideProps(context) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/systems/marquee`);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        return {
            props: { data }, // will be passed to the page component as props
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
