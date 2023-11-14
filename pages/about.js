import Image from "next/image";
import About from "../componnent/About";
import Container from "../componnent/Container";
import Meta from "../componnent/Meta";
import aboutimage from "../public/2.jpg";
import styles from "../styles/About.module.css";

export default function AboutPage() {
  return (
    <main>
      <Meta title="About" name="about" content='about' />
      <div className={styles.aboutContainer}>
        <Container>
          <div className={styles.fristAboutsectionWrp}>
            <div>
              <Image src={aboutimage} alt="about-image" />
            </div>
            <div>
              <article className={styles.aboutpageFristWrp}>
                <h2>Welcome</h2>
                <p>চান্দাশ মখদুম শাহ্ উচ্চ বিদ্যালয় এ আপনাকে স্বাগতম
                  চান্দাশ মখদুম শাহ্ উচ্চ বিদ্যালয়টি একটি ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান। 2012 সালে দার্জিলিং এর বিখ্যাত সেন্ট পল পাবলিক স্কুলের আদলে ৩০ একর জমির ওপর “স্কুলটি” প্রতিষ্ঠিত। ১৯৪০ইং সালে জুনিয়র মাদ্রাসা থেকে ০১-০১-১৯৬৬ইং সালে মাধ্যমিক বিদ্যালয়ে রুপান্তরিত হয়ে ০১-০৬-১৯৮৫ইং সালে প্রথম এমপিও ভূক্ত হন।
                </p>
              </article>
            </div>
          </div>
          <div>
            <About />
          </div>
        </Container>
      </div>
    </main>
  )
}
