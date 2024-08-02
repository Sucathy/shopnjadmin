import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../Components/AddProduct/AddProduct";
import ListProduct from "../Components/ListProduct/ListProduct";
import OrderList from "../Components/OrderList/OrderList";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./CSS/Admin.css";
import LoginSignup from "./LoginSignup";

const Admin = () => {
  return (
    <div className="/admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/orderlist" element={<OrderList />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </div>
  );
};

export default Admin;
