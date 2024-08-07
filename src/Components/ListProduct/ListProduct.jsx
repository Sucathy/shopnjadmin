import React, { useEffect, useState } from "react";
import cross_icon from "../Assets/cross_icon.png";
import Sidebar from "../Sidebar/Sidebar";
import "./ListProduct.css";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => {
    fetch("http://34.229.212.238:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch("http://34.229.212.238:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    fetch("http://34.229.212.238:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  return (
    <div className="something">
      <Sidebar />
      <div className="listproduct">
        <h1>All Products List</h1>
        <div className="listproduct-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>descriptions</p>
          <p>Remove</p>
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
                  <div className="listproduct-product-icon1">
                    <img
                      className="listproduct-product-icon1"
                      src={e.image2}
                      alt=""
                    />
                    <img
                      className="listproduct-product-icon1"
                      src={e.image3}
                      alt=""
                    />
                    <img
                      className="listproduct-product-icon1"
                      src={e.image4}
                      alt=""
                    />
                    <img
                      className="listproduct-product-icon1"
                      src={e.image5}
                      alt=""
                    />
                    <img
                      className="listproduct-product-icon1"
                      src={e.image6}
                      alt=""
                    />
                  </div>
                  <p cartitems-product-title>{e.name}</p>
                  <p>Rs.{e.old_price}</p>
                  <p>Rs.{e.new_price}</p>
                  <p>{e.category}</p>
                  <p>{e.descriptions}</p>
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
