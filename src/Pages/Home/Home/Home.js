import React from "react";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import Banner from "../Banner/Banner";
import ProductCategories from "../ProductsCategories/ProductCategories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertisedItems></AdvertisedItems>
      <ProductCategories></ProductCategories>
    </div>
  );
};

export default Home;
