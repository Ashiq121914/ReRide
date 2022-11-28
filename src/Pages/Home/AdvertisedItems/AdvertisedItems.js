import axios from "axios";
import React, { useEffect, useState } from "react";
import AdvertisedItemCard from "./AdvertisedItemCard";

const AdvertisedItems = () => {
  const [advertisedItems, setAdvertisedItems] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/advertisedItems").then((data) => {
      setAdvertisedItems(data.data);
    });
  }, []);

  return (
    <div className="my-20">
      {advertisedItems && (
        <h2 className="text-3xl my-10 text-center">Advertised Items</h2>
      )}
      {advertisedItems &&
        advertisedItems.map((advertisedItem) => (
          <AdvertisedItemCard
            key={advertisedItem._id}
            advertisedItem={advertisedItem}
          ></AdvertisedItemCard>
        ))}
    </div>
  );
};

export default AdvertisedItems;
