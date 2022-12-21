import React from "react";

const AdvertisedItemCard = ({ advertisedItem }) => {
  const {
    image,

    resale_price,

    title,
  } = advertisedItem;
  return (
    <>
      {advertisedItem.advertised && (
        <div className="card w-80 bg-base-100 shadow-2xl shadow-blue-500/50">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>Price:{resale_price}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertisedItemCard;
