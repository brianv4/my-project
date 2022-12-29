import React from "react";
import Products from "../components/Products";
import Content from "../components/Content";
import Content2 from "../components/Content2";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Content />
      <Content2 />
      <Products />
    </>
  );
};

export default Home;
