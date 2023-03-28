import React from "react";
import Footer from "../components/Global/Footer";
import Header from "../components/Global/Header";
import AmazeNFT from "../components/Home/AmazeNFT";
import CreateSellNFT from "../components/Home/CreateSellNFT";
import DiscoverNFTs from "../components/Home/DiscoverNFTs";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AmazeNFT />
      <CreateSellNFT />
      <DiscoverNFTs />
      <Footer />
    </>
  );
};

export default Home;
