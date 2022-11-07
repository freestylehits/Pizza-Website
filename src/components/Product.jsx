import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Childcard from "./Childcard.jsx";

const Product = () => {
  const [productData, setproductData] = useState([]);
  useEffect(() => {
    fetch("https://ecom-rest-apis.herokuapp.com/api/products/")
      .then((response) => response.json())
      .then((data) => setproductData(data));
  }, []);

  return (
    <>
      <div className="mainproduct">
        {productData.map((item) => {
          const { image, name, size, price, _id } = item;
          return <Childcard item={item} key={_id} />;
        })}
      </div>
    </>
  );
};

export default Product;
