import React, { useEffect, useState } from "react";
import ProductCart from "../../Components/ProductCart";
import { useSelector } from "react-redux";

const Home = () => {
  // const { data } = useProducts();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("Data/Product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);

  const state = useSelector((state) => state);
  console.log("state", state);
  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-2 gap-3 mx-16 my-10">
        {products.map((product, i) => (
          <ProductCart key={i} product={product}></ProductCart>
        ))}
      </div>
    </>
  );
};

export default Home;
