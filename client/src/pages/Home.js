import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blogsform from "../components/Blogsform";
import Blogs from "../components/Blogs";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Blogs />
      <Blogsform />
      <Footer />
    </>
  );
}

export default Home;
