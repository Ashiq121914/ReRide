import { useQuery } from "@tanstack/react-query";
import React from "react";

import ProductCategoryCard from "./ProductCategoryCard";

const ProductCategories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        "https://resale-market-server-ashiq121914.vercel.app/categories"
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div id="categories" className="my-20">
      <div>
        <h2 className="text-4xl underline text-center mb-20 text-white">
          Categories
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 w-4/5 mx-auto gap-8">
        {categories.map((category) => (
          <ProductCategoryCard
            key={category._id}
            category={category}
          ></ProductCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
