import React, { createContext, useContext, useEffect, useState } from "react";
const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("Data/Product.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, [data]);
  // const value = { data };
  //   console.log(value);
  // return (
  //   <PRODUCT_CONTEXT.Provider value={value}>
  //     {children}
  //   </PRODUCT_CONTEXT.Provider>
  // );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);

  return context;
};

export default ProductProvider;
