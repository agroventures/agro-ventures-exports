import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Products from "../components/home/Products";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Contact from "../components/home/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <WhyChooseUs />
      {/* <Stats /> */}
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
