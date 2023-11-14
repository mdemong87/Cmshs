import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import Footer from "./Footer";
import Header from "./Header";
export default function Layout({ children }) {

  const [show, setshow] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
      setshow(true);
    } else {
      setshow(false);
    }
  });


  function handleClick() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }



  return (
    <div style={{ position: "relative" }}>
      <Header />
      {children}
      {show && <div onClick={() => handleClick()} style={{ position: "fixed", bottom: "40px", right: "40px", background: "#dbb523", width: "40px", height: "40px", borderRadius: "10px", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
        <AiOutlineArrowUp style={{ fontSize: "24px" }} />
      </div>}
      <Footer />
    </div >
  )
}
