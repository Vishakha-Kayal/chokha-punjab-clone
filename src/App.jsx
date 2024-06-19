import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Button from "./components/Button";
import Features from "./components/Features/Features";
import Punjabigirl from "./components/Punjabigirl";
import Menu from "./components/Menu";
import Dhol from "./components/Dhol";
import Testimonials from "./components/Testimonials";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <div id="first-sec">
          <Navbar />
          <section className="w-full pt-[18.5rem] pb-[18vh]">
            <Hero />
            <aside className="flex gap-4 fixed top-[37%] rotate-90 right-[-96px]">
              <Button name="Book Tickets" />
              <Button name="Reservations" />
            </aside>
          </section>
        </div>
        <Features />
        <Punjabigirl />
        <Menu />
        <Dhol />
        {/* <Testimonials /> */}
      </main>
    </>
  );
}

export default App;
