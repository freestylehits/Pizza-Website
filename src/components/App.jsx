import React from "react";
import "./App.css";
import Home from "./Home";
import Product from "./Product";
import Navbar from "./Navbar";
import Info from "./Info";
import Addcart from "./Addcart";
import { useState } from "react";
import Storedata from "./Storedata";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Loginform from "./Loginform";

const App = () => {
  const [Cart, setCart] = useState({});
  const [success, setsuccess] = useState(false);
  const [loginsuccess, setloginsuccess] = useState(true);
  const [logindata, setlogindata] = useState({});
  const [data, setdata] = useState(true);
  return (
    <div>
      <Storedata.Provider
        value={{
          Cart,
          setCart,
          data,
          setdata,
          setsuccess,
          setloginsuccess,
          logindata,
          setlogindata,
        }}
      >
        <BrowserRouter>
          {success && <Navbar />}
          <Routes>
            {loginsuccess && <Route path="/" element={<Loginform />}></Route>}
            {success && <Route path="/" element={<Home />}></Route>}
            {success && <Route path="/product" element={<Product />}></Route>}
            {success && (
              <Route path="/singlepizza/:id" element={<Info />}></Route>
            )}
            {success && <Route path="/addcart" element={<Addcart />}></Route>}
          </Routes>
        </BrowserRouter>
      </Storedata.Provider>
    </div>
  );
};

export default App;
