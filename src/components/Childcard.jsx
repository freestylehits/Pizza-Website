import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Storedata from "./Storedata";
const Childcard = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { Cart, setCart } = useContext(Storedata);

  function handleClick(id) {
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
  const { image, name, size, price, _id } = props.item;

  return (
    <div className="product">
      <Link to={`/singlepizza/${_id}`}>
        <img className="proimage" src={image} alt="error" />
        <p>{name}</p>
        <p className="orange">
          <span>{size}</span>
        </p>
      </Link>
      <div className="procontent">
        <p>₹{price}</p>
        <button
          className="btn2"
          style={{
            backgroundColor: isActive ? "green" : "",
          }}
          onClick={() => handleClick(_id)}
        >
          {isActive ? "Added" : "Add & Enjoy !"}
        </button>
      </div>
    </div>
  );
};
export default Childcard;
