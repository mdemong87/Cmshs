import one from '../public/1.jpg';
import two from '../public/2.jpg';
import three from '../public/3.jpg';
import four from '../public/4.jpg';
import styles from "../styles/Banner.module.css";

// import Swiper core and required modules
import { A11y, Autoplay, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SingleBanner from './SingleBanner';

export default function Banner() {
    const img = [one, two, three, four];


    return (
        <section className={styles.bannerImgWrp}>
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y, Autoplay]}
                slidesPerView={1}
                navigation
                autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": false
                }}
                loop={true}

            >
                <SwiperSlide>
                    <SingleBanner sl={1} head={"A Place to Learn, Grow, and Succeed"} dis={"Discover Chandash Mokhdum Shah High School: Where Learning Meets Inspiration. Join Us on a Journey of Knowledge, Innovation, and Personal Growth."} />
                </SwiperSlide>
                <SwiperSlide>
                    <SingleBanner sl={2} head={"Innovate, Educate, Inspire"} dis={"Discover Chandash Mokhdum Shah High School: Where Learning Meets Inspiration. Join Us on a Journey of Knowledge, Innovation, and Personal Growth."} />
                </SwiperSlide>
                <SwiperSlide>
                    <SingleBanner sl={3} head={"Building Dreams, Shaping Lives"} dis={"Discover Chandash Mokhdum Shah High School: Where Learning Meets Inspiration. Join Us on a Journey of Knowledge, Innovation, and Personal Growth."} />
                </SwiperSlide>
                <SwiperSlide>
                    <SingleBanner sl={4} head={"Creating Bright Futures Together"} dis={"Discover Chandash Mokhdum Shah High School: Where Learning Meets Inspiration. Join Us on a Journey of Knowledge, Innovation, and Personal Growth."} />
                </SwiperSlide>
            </Swiper>



        </section >
    )
}
