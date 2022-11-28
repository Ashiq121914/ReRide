import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";

import WishlistCheckoutForm from "./WishlistCheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const WishlistPayment = () => {
  const wishlist = useLoaderData();

  const { title, resale_price } = wishlist;
  console.log(title);
  return (
    <div>
      <h3 className="text-3xl">Payment for {title}</h3>
      <p className="text-xl">
        Please pay <strong>${resale_price} </strong>
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <WishlistCheckoutForm wishlist={wishlist} />
        </Elements>
      </div>
    </div>
  );
};

export default WishlistPayment;
