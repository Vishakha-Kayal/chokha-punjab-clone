import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import News from "./components/News";
import "../src/components//GreatFontStyle.module.css";
import Footer from "./components/Footer/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
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
            <Testimonials />
            <News />
          </main>
          <div className="w-full h-[60vh] bg-[#FDFCF8]">
            <Footer />
          </div>
        </>
      ),
    },
    {
      path:"/news",
      element:(
        <>
          <News/>
        </>
      )
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
