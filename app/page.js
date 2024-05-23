import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Weather from "./components/Weather";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar />
      <Hero />
      <Weather />
      <Carousel />
      <Footer />
    </main>
  );
}
