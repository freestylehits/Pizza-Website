import React from "react";

import "./cart.css";
import Storedata from "./Storedata";
import { useState, useContext, useEffect } from "react";
// import Newcart from "./Newcart";
import { Link, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import Swal from "sweetalert2";

const Addcart = () => {
  const navigate = useNavigate();
  var total = 0;
  const { Cart, setCart } = useContext(Storedata);
  const [product, setproduct] = useState([]);

  useEffect(() => {
    // console.log(Cart);
    if (!Cart.item) {
      return;
    }
    // console.log('cart', cart.items);
    fetch("https://ecom-rest-apis.herokuapp.com/api/products/cart-items", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: Object.keys(Cart.item) }),
    })
      .then((resp) => resp.json())
      .then((data) => setproduct(data));
  }, [product]);
  function calculate(price, id) {
    const data = { ...Cart };
    const dat1 = data.item[id];
    const cal = dat1 * price;
    total = total + cal;
    return cal;
  }

  const deletecart = (id) => {
    const data = { ...Cart };
    const dat1 = data.item[id];
    console.log("before", data);
    delete data.item[id];
    data.total = data.total - dat1;
    // data.item[id] = Cart.item[id] - data.item[id];
    console.log("after", data);
    setCart(data);
  };

  const added = (id) => {
    const data = { ...Cart };
    data.item[id] += 1;
    data.total += 1;
    setCart(data);
  };

  const Subtract = (id) => {
    const data = { ...Cart };
    if (Cart.item[id] > 0) {
      data.item[id] -= 1;
      data.total -= 1;
      setCart(data);
    } else {
      data.item[id] = 0;
    }
  };

  function ordernow() {
    Swal.fire(
      "Good job!",
      "You have placed the order successfully!",
      "success"
    );
    setproduct([]);
    setCart({});
    html2canvas(document.querySelector("#root"), {
      scrollX: 0,
      scrollY: 0,
    }).then(function (canvas) {
      console.log("object");
      var a = document.createElement("a");
      a.href = canvas
        .toDataURL("..assets/image/jpg")
        .replace("image/jpeg", "image/octet-stream");
      a.download = "somefilename.jpg";
      a.click();
    });
  }
  // console.log("object");
  // console.log(Cart.total);
  return Cart.total !== 0 ? (
    <div>
      {product.map((elem) => {
        const { image, name, size, price, _id } = elem;
        return (
          <div className="cartmain">
            <div className="addcart-main" key={_id}>
              <div className="addcart-image" style={{ flex: 2 }}>
                <Link to="/product">
                  <img className="logo6" src={image} alt="error" />
                </Link>
                <div className="addcartpara" style={{ flex: 2 }}>
                  <p className="fs-5 mt-3">{name}</p>
                </div>
              </div>
              <div className="addcart-buttons" style={{ flex: 1 }}>
                <button className="apm" onClick={() => Subtract(_id)}>
                  -
                </button>
                <p style={{ marginTop: "18px", fontSize: "20px" }}>
                  {Cart.item[_id]}
                </p>
                <button className="apm" onClick={() => added(_id)}>
                  +
                </button>
              </div>
              <div
                className="addcart-price text-center mt-3 fs-5"
                style={{ flex: 1 }}
              >
                <p>
                  <b>₹</b>
                  {calculate(price, _id)}
                </p>
              </div>
              <div
                className="addcart-delete"
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <button className="adelete" onClick={() => deletecart(_id)}>
                  delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div style={{ width: "90%", margin: "0px auto" }}>
        <hr />
      </div>
      <div className="total">
        <p>
          <span className="total1">
            Total : <b style={{ color: "white" }}>{total ? total : ""}</b>
          </span>
        </p>
      </div>
      <div className="ordernow">
        <Link to="/">
          <button className="order" onClick={ordernow}>
            Order Now
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div>
      <img
        className="emptycart"
        src="https://ak.picdn.net/shutterstock/videos/19584043/thumb/1.jpg?ip=x480"
        alt="error"
      />
    </div>
  );
};

export default Addcart;
