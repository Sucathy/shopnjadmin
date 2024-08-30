import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
// import HomePage from "./Pages/HomePage";
import AddProduct from "./Components/AddProduct/AddProduct";
import ListProduct from "./Components/ListProduct/ListProduct";
import OrderList from "./Components/OrderList/OrderList";
import Sidebar from "./Components/Sidebar/Sidebar";
import UserDetails from "./Components/UserDetails/UserProfile";
// import WebSite from "./Components/WebSite/WebSite";
import AccountList from "./Components/AccountList/AccountList";
import DashBoard from "./Components/DashBorad/DashBoard";
import Website from "./Components/WebSite/Website";
import WebSiteList from "./Components/WebSiteList/WebsiteList";
import Admin from "./Pages/Admin";
import LoginSignup from "./Pages/LoginSignup";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Router>
      <div>
        <Navbar toggleSidebar={toggleSidebar} />
        {/* <DashBoard toggleSidebar={toggleSidebar} /> */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sidebar"
            element={
              <ProtectedRoute>
                <Sidebar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashBoard toggleSidebar={toggleSidebar} />
              </ProtectedRoute>
            }
          />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} />
          <Route path="/accountlist" element={<AccountList />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/website" element={<Website />} />
          <Route path="/websitelist" element={<WebSiteList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
