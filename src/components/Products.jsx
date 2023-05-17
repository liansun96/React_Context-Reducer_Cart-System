import React from "react";
import { StateContextCustom } from "../context/StateContext";
import Product from "./Product";

const Products = () => {
  const {
    state: { products },
  } = StateContextCustom();
  // console.log(products);

  return (
    <div className="w-[1200px] mx-auto flex justify-center flex-wrap gap-6">
      {products.map((pd) => {
        return <Product key={pd.id} {...pd} />;
      })}
    </div>
  );
};

export default Products;
