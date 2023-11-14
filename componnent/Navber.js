import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../styles/Navber.module.css";

export default function Navber() {

  const [nav, setNav] = useState(false);
  const activelink = useRouter();
  const path = activelink.asPath;


  return <div className={styles.navberWrp}>
    <ToastContainer position="top-center" />
    <div className={styles.moboNav}>
      <CgMenuRight className={styles.moboIcons} onClick={() => setNav(!nav)} />
    </div>
    <div className={`${styles.NavItem} ${!nav && styles.active}`}>
      <div className={styles.linkWrp}>
        <div className={styles.CroosBtnWrp}>
          <ImCross className={styles.crossicon} onClick={() => setNav(!nav)} />
        </div>
        <nav className={styles.imiditateLinkWrp}>


          <div className={styles.imiditateLink}>

            <Link onClick={() => setNav(!nav)} className={path == "/" ? styles.activeLink : styles.link} href='/'>Home</Link>

            <Link onClick={() => setNav(!nav)} className={path == "/about" ? styles.activeLink : styles.link} href='/about'>About us</Link>

            <Link onClick={() => setNav(!nav)} className={path == "/payment" ? styles.activeLink : path == "/payment/failed" ? styles.activeLink : path == "/payment/success" ? styles.activeLink : styles.link} href='/payment'>Payment</Link>

            <Link onClick={() => toast.info("Online class is under Developing")} className={styles.searchLink} href='/'>Online Class</Link>

            <Link onClick={() => setNav(!nav)} className={path == "/ragistration" ? styles.activeLink : path == "/ragistration/download" ? styles.activeLink : styles.link} href='/ragistration'>Online Admission</Link>

            <Link onClick={() => toast.info("Search Option is under Developing")} className={styles.searchLink} href='/'>
              <FaSearch className={styles.seacrhIcons} />
            </Link>
          </div>

          <div className={styles.imiditateLink}>
            <Link onClick={() => setNav(!nav)} className={path == "/notice" ? styles.activeLink : styles.link} href='/notice'>Notices</Link>
            <Link onClick={() => setNav(!nav)} className={path == "/sylebus" ? styles.activeLink : styles.link} href='/sylebus'>Syllabus</Link>
            <Link onClick={() => setNav(!nav)} className={path == "/employee" ? styles.activeLink : styles.link} href='/employee'>Employees</Link>
            <Link onClick={() => setNav(!nav)} className={path == "/results" ? styles.activeLink : styles.link} href='/results'>Results</Link>
            <Link onClick={() => setNav(!nav)} className={path == "/routine" ? styles.activeLink : styles.link} href='/routine'>Routines</Link>
            <Link onClick={() => setNav(!nav)} className={path == "/gellary" ? styles.activeLink : styles.link} href='/gellary'>Gellarys</Link>
            <Link onClick={() => setNav(!nav)} className={path == "/library" ? styles.activeLink : path.includes("/library") ? styles.activeLink : styles.link} href='/library'>Librarys</Link>
            <Link onClick={() => setNav(!nav)} className={path == "/login" ? styles.activeLink : styles.link} href='/admin'>Login</Link>
          </div>


        </nav>
      </div>
      <div className={styles.transparantDiv} />
    </div>
  </div >

}
