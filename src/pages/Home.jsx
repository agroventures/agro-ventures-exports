import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Products from "../components/home/Products";
import Services from "../components/home/Services";
import AgriEnterprise from "../components/home/AgriEnterprise";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Companies from "../components/home/Companies";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <AgriEnterprise />
      <Products />
      <Services />
      {/* <Stats /> */}
      <Testimonials />
      {/* <CTA /> */}
      <Companies />
      <Footer />
    </>
  );
}
