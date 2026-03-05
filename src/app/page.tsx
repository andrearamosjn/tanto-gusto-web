import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Instagram from "@/components/Instagram";
import OrderCTA from "@/components/OrderCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-green focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Locations />
        <About />
        <Reviews />
        <Instagram />
        <OrderCTA />
      </main>
      <Footer />
    </>
  );
}
