import React from 'react';
import styles from "../styles/Vedio.module.css";


export default function Vedio() {
    return (
        <section className={styles.vedio}>
            {/* <video width="320" height="240" autoPlay>
                <source src="https://vimeo.com/870282845?share=copy" type="video/mp4" />
            </video> */}

            {/* style={{ width: "100%", height: "600px" }} */}


            <iframe style={{ width: "100%", height: "600px" }} src="https://www.youtube.com/embed/dUmsjjgSvEU?si=lxs7_u5VyzLcc9Bf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

        </section>
    )
}
