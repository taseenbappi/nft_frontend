import React from "react";
import Footer from "../components/Global/Footer";
import Header from "../components/Global/Header";
import AmazeNFT from "../components/Home/AmazeNFT";
import CreateSellNFT from "../components/Home/CreateSellNFT";
import DiscoverNFTs from "../components/Home/DiscoverNFTs";
import FeaturedNFTs from "../components/Home/FeaturedNFTs";
import Hero from "../components/Home/Hero";
import TopCollectionNFTs from "../components/Home/TopCollectionNFTs";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AmazeNFT />
      <TopCollectionNFTs />
      <FeaturedNFTs />
      <CreateSellNFT />
      <DiscoverNFTs />
      <Footer />
    </>
  );
};

export default Home;
