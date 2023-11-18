import { useEffect } from 'react';
import About from '../componnent/About';
import Banner from '../componnent/Banner';
import Container from '../componnent/Container';
import History from "../componnent/History";
import HomeTeacher from '../componnent/HomeTeacher';
import HomeLatestNotice from "../componnent/HomelatestNotice";
import ImportantLink from "../componnent/ImportantLink";
import Map from "../componnent/Map";
import Meta from '../componnent/Meta';
import TrandToday from "../componnent/TrandToday";
import Vedio from '../componnent/Vedio';
import { UseTreandToday } from '../context/trandTodayContext';
import styles from '../styles/Home.module.css';


export default function Home({ data, datatwo, datathree }) {
  const { setmarquee } = UseTreandToday();




  useEffect(() => {
    setmarquee(data?.marquee);
  }, [data, setmarquee])


  return (
    <main>
      <Meta title="Home || Chandash Mokhdum Shah High School" />
      <div className={styles.container}>
        <Banner />
        <Container>
          <div className={styles.trandTodayWrp}>
            <TrandToday />
          </div>
          <section className={styles.controllerFrist}>
            <div className={styles.sideMenu}>
              <HomeLatestNotice datathree={datathree} />
              <ImportantLink />
            </div>
            <div className={styles.about}>
              <About />
            </div>
          </section>
        </Container>
        <div className={styles.histroyWrp}>
          <History />
          <Vedio />
          <HomeTeacher teacherdata={datatwo} />
        </div>
        <Container>
          <Map />
        </Container>
      </div>
    </main >
  )
}


export async function getStaticProps() {

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/systems/marquee`);

    const restwo = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/employee`);

    const resthree = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notice`);

    if (!res.ok || !restwo.ok || !resthree.ok) {
      throw new error();
    }

    const data = await res.json();
    const datatwo = await restwo.json();
    const datathree = await resthree.json();

    return {
      props: { data, datatwo, datathree }, // will be passed to the page component as props
      revalidate: 60
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