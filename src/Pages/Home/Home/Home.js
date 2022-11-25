import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import Banner from "../Banner/Banner";
import ProductCategories from "../ProductsCategories/ProductCategories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertisedItems></AdvertisedItems>
      <ProductCategories></ProductCategories>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
