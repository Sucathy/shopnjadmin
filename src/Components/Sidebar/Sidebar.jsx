import React from "react";
import { Link } from "react-router-dom";
import add_product_icon from "../Assets/Product_Cart.svg";
import list_product_icon from "../Assets/Product_list_icon.svg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/website" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          {/* <img src={list_product_icon} alt="" /> */}
          <p> WebSite</p>
        </div>
      </Link>
      <Link to="/websitelist" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          {/* <img src={list_product_icon} alt="" /> */}
          <p> WebSite List </p>
        </div>
      </Link>
      <Link to="/addproduct" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to="/listproduct" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          {/* <img src={list_product_icon} alt="" /> */}
          <p>Product List</p>
        </div>
      </Link>
      <Link to="/orderlist" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          {/* <img src={add_product_icon} alt="" /> */}
          <p>Order List</p>
        </div>
      </Link>
      <Link to="/userdetails" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" />
          <p>User details</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
