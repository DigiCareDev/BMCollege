import About from "../components/About";
import DirectorsDesk from "../components/DirectorsDesk";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Contact from "../components/contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <DirectorsDesk/>
      <Contact/>
      <Footer/>
    </>
  );
}
