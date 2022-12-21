import React from "react";
import { TypeAnimation } from "react-type-animation";
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
            <TypeAnimation
              className="mb-5 text-6xl font-bold text-white "
              sequence={[
                "Explore Our Range of Bikes", // Types 'One'
                4000, // Waits 1s
                "Buy Bike with authenticity", // Deletes 'One' and types 'Two'
                4000, // Waits 2s
                "Best for buying bikes without additional fees", // Types 'Three' without deleting 'Two'
                4000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "em" }}
              speed={1}
            />
          </h1>
          <p className="mb-5  text-white w-3/4 mx-auto">
            Can't affort a new bike? We are here to offer range of second hand
            bikes depending upon out clients need.
          </p>
          <button className="btn bg-red-800 text-white btn-lg">
            <a href="#categories">Explore</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
