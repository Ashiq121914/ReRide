import React from "react";
import { useRouteError } from "react-router-dom";
import img from "../../../assets/error-404.jpg";

const DisplayError = () => {
  const error = useRouteError();
  return (
    <div className="text-center mt-60">
      <p className="text-3xl text-white font-bold">404</p>
      <p className="text-xl">Something went wrong</p>
      <p className="text-md text-error">{error.message || error.statusText}</p>
      <img className="mx-auto" src={img} alt="" />
    </div>
  );
};

export default DisplayError;
