import React from "react";
import bg from "../../../assets/banner/one.jpg";

const Banner = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${bg})`, height: "600px" }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content">
        <div className="text-center">
          <h1 className="mb-5 text-6xl font-bold text-white ">
            Explore Our Range of Bikes
          </h1>
          <p className="mb-5  text-white w-3/4 mx-auto">
            Can't affort a new bike? We are here to offer range of second hand
            bikes depending upon out clients need.
          </p>
          <button className="btn bg-red-800 text-white btn-lg">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
