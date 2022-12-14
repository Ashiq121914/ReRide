import React, { useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";
import CategoryProductsCard from "./CategoryProductsCard";

const CategoryIdProducts = () => {
  const categoryProducts = useLoaderData();

  const location = useLocation();

  // for modal
  const [product, setProduct] = useState(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-4/5 lg:mx-auto">
      {categoryProducts.map((categoryProduct) => (
        <CategoryProductsCard
          key={categoryProduct._id}
          categoryProduct={categoryProduct}
          setProduct={setProduct}
        ></CategoryProductsCard>
      ))}
      <div>
        {product && (
          <BookingModal
            product={product}
            setProduct={setProduct}
          ></BookingModal>
        )}
      </div>
    </div>
  );
};

export default CategoryIdProducts;
