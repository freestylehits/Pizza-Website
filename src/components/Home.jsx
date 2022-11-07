import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="mainhome">
        <div className="logo">
          <img className="logo1" src="images/pizza.png" alt="error" />
        </div>
        <div className="homecontent">
          <p className="tag1">Every meal would be </p>
          <p className="tag2">better if it were "pizza".</p>
          <Link to="/Product">
            <button className="btn1">Order & Enjoy !</button>
          </Link>
        </div>
      </div>
      <div>
        <Product />
      </div>
    </div>
  );
};

export default Home;
