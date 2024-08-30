import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo2.jpeg";
import menu_icon from "../Assets/menuicon2.svg";
import "./DashBoard.css";

const DashBoard = ({ toggleSidebar }) => {
  let [menu, setMenu] = useState("shop");

  // const [searchQuery, setSearchQuery] = useState("");
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <>
      <div className="nav">
        <button className="menu-btn" onClick={toggleSidebar}>
          <img className="menu-btnicon" src={menu_icon} alt="" />
        </button>
        <img
          onClick={dropdown_toggle}
          className="nav-dropdown"
          src={menu_icon}
          alt=""
        />
        <Link
          to="/addproduct"
          onClick={() => {
            setMenu("shop");
          }}
          style={{ textDecoration: "none" }}
          className="nav-logo"
        >
          <img src={logo} alt="logo" />
          {/* <p>ShopSJ</p> */}
        </Link>

        <ul ref={menuRef} className="nav-menu">
          <li
            onClick={() => {
              setMenu("addproduct");
            }}
          >
            <Link to="/addproduct" style={{ textDecoration: "none" }}>
              Add Product
            </Link>
            {menu === "addproduct" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("/listproduct");
            }}
          >
            <Link to="/listproduct" style={{ textDecoration: "none" }}>
              Product List
            </Link>
            {menu === "/listproduct" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("/website");
            }}
          >
            <Link to="/website" style={{ textDecoration: "none" }}>
              Add WebSite change
            </Link>
            {menu === "/website" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("websitelist");
            }}
          >
            <Link to="/websitelist" style={{ textDecoration: "none" }}>
              WebSite changesList
            </Link>
            {menu === "websitelist" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("/accountlist");
            }}
          >
            <Link to="/accountlist" style={{ textDecoration: "none" }}>
              Account Details
            </Link>
            {menu === "/accountlist" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("/orderlist");
            }}
          >
            <Link to="/orderlist" style={{ textDecoration: "none" }}>
              Order List
            </Link>
            {menu === "/orderlist" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("/userdetails");
            }}
          >
            <Link to="/userdetails" style={{ textDecoration: "none" }}>
              User details
            </Link>
            {menu === "/userdetails" ? <hr /> : <></>}
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashBoard;
