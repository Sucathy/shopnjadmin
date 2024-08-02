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
import Website from "./Components/WebSite/Website";
import WebSiteList from "./Components/WebSiteList/WebsiteList"
import Admin from "./Pages/Admin";
import LoginSignup from "./Pages/LoginSignup";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
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

          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} />
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
