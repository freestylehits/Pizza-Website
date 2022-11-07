import React from "react";
import { Link } from "react-router-dom";
import Storedata from "./Storedata";
import { useContext } from "react";

const Navbar = () => {
  const { Cart } = useContext(Storedata);

  return (
    <div>
      <div className="mainnavbar">
        <div className="contain">
          <div className="navimage">
            <Link to="/">
              <p className="logo">
                <img src="images/logo.png" alt="error" />
                Express
              </p>
            </Link>
          </div>
          <div className="navcontent">
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/Product">Product</Link>
            </p>
            <Link to="/addcart">
              <p
                className="cart"
                style={{
                  width: "110%",
                  justifyContent: "space-between",
                  display: "flex",
                  height: "40px",
                  // alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "25px",
                    color: "white",
                    fontWeight: "bold",
                    paddingBottom: "0px",
                  }}
                >
                  {Cart.total ? Cart.total : "0"}
                </p>
                <img src="images/cart.png" alt="error" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
