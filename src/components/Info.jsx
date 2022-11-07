import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Storedata from "./Storedata";

const Info = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  const { Cart, setCart } = useContext(Storedata);
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive("Added");
    setTimeout(() => {
      setIsActive(isActive);
    }, 400);
    const data = { ...Cart };
    if (!data.item) {
      data.item = {};
    }

    if (data.item[id]) {
      data.item[id] += 1;
    } else {
      data.item[id] = 1;
    }

    if (!data.total) {
      data.total = 0;
    }
    data.total += 1;
    setCart(data);
  }

  useEffect(() => {
    fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <div className="maininfo">
      <Link to="/product">
        <p className="btn4">⬅</p>
      </Link>
      <div className="innermain">
        <img className="logo2" src={info.image} alt="error" />
        <div className="main">
          <p>{info.name}</p>
          <p className="name1">
            <span>{info.size}</span>
          </p>
          <div className="inmain">
            <p>₹{info.price}</p>
            <button
              className="btn3"
              style={{
                backgroundColor: isActive ? "green" : "",
              }}
              onClick={() => handleClick()}
            >
              {isActive ? "Added" : "Add&Enjoy!"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
