import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import MenuSection from "@/components/MenuSection";
import ChaiBuster from "@/components/ChaiBuster";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <ChaiBuster />
      <MenuSection />
      <Gallery />
      <Footer />
    </main>
  );
}
