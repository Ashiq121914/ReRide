import axios from "axios";
import React, { useEffect, useState } from "react";
import AdvertisedItemCard from "./AdvertisedItemCard";

const AdvertisedItems = () => {
  const [advertisedItems, setAdvertisedItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://resale-market-server-ashiq121914.vercel.app/advertisedItems"
      )
      .then((data) => {
        setAdvertisedItems(data.data);
      });
  }, []);

  return (
    <div>
      {advertisedItems.length > 0 ? (
        <>
          <div className="w-3/4 mx-auto">
            <h2 className="text-4xl my-10 text-center text-white underline">
              Advertised Items
            </h2>
            <div className="my-20 grid lg:grid-cols-3 grid-cols-1 gap-4">
              {advertisedItems.map((advertisedItem) => (
                <AdvertisedItemCard
                  key={advertisedItem._id}
                  advertisedItem={advertisedItem}
                ></AdvertisedItemCard>
              ))}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AdvertisedItems;
