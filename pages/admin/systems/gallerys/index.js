import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "../../../../componnent/Admin/Layout";
import Loding from "../../../../componnent/Loding";
import styles from "../../.././../styles/Admin/systems/gallery.module.css";


export default function Index({ data, error }) {


    const [isloading, setisloading] = useState(false);
    const [photo, setphoto] = useState('');
    const router = useRouter();



    function handlechange(e) {
        const file = e.target.files[0];
        const filereacder = new FileReader();
        filereacder.onload = (event) => {
            setphoto(event.target.result)
        }
        filereacder.readAsDataURL(file);


    }

    async function handleClick(e) {

        if (photo != '') {
            setisloading(true)
            const res = await fetch("/api/systems/gallerys", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify({ file: photo })
            });

            const resposns = await res.json();
            router.replace(router.asPath);
            setisloading(false);
            if (resposns.success) {
                toast.success("Gellary Upload Successfully");
                setphoto("");
            } else {
                toast.error("Gellary Upload Failed");
            }
        } else {
            toast.warn("Please! Selete File");
        }


    }


    async function handleDelete(e) {
        setisloading(true)
        const res = await fetch("/api/systems/gallerys", {
            method: "DELETE",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({ id: e })
        });

        const resposns = await res.json();
        router.replace(router.asPath);
        setisloading(false);
        if (resposns.success) {
            toast.success("Gellary Delete Successfully");
            setphoto("");
        } else {
            toast.error("Gellary Delete failed");
        }
    }


    console.log(data);



    return (
        <div className={styles.marqueeWrp}>
            {isloading && <Loding />}
            <div className={styles.inputWrp}>
                <input type="file" onChange={(e) => handlechange(e)} />
                <button onClick={(e) => handleClick(e)}>Add</button>

            </div>
            <div className={styles.imageWrp}>

                {/* {
                    error ? <div>{error}</div> : data?.gallery?.map((item, index) => {
                        return <div key={index}>
                            <div className={styles.image}>
                                <Image src={item.file.secure_url} alt={"Gallery Photo"} height={500} width={500} />
                            </div>
                            <div onClick={() => handleDelete(item._id)} className={styles.deleteBtn}>Delete</div>
                        </div>
                    })
                } */}


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
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/systems/gallerys`);

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
