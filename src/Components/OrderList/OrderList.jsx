import React, { useEffect, useState } from "react";
import cross_icon from "../Assets/cross_icon.png";
import Sidebar from "../Sidebar/Sidebar";
import "./OrderList.css";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => {
    fetch("http://34.235.157.244:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch("http://34.235.157.244:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    fetch("http://34.235.157.244:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  return (
    <div className="something">
      <Sidebar />
      <div className="listproduct">
        <h1>All Order List</h1>
        <div className="listproduct-format-main">
          <p>Product</p>
          <p>Adress</p>
          <p>Name</p>
          <p>Email</p>
          <p>Order Date</p>
          <p>Paid</p>
          <p>status</p>
        </div>
        <div className="listproduct-allproducts">
          <hr />
          {allproducts.map((e) => {
            return (
              <div>
                <div className="listproduct-format-main listproduct-format">
                  <img
                    className="listproduct-product-icon"
                    src={e.image}
                    alt=""
                  />
                  <p cartitems-product-title>{e.adress}</p>
                  <p cartitems-product-title>{e.name}</p>
                  <p>RS{e.old_price}</p>
                  <p>Rs{e.new_price}</p>
                  <p>{e.category}</p>
                  <img
                    className="listproduct-remove-icon"
                    onClick={() => {
                      removeProduct(e.id);
                    }}
                    src={cross_icon}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
