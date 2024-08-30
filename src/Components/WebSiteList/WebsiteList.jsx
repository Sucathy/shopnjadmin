import React, { useEffect, useState } from "react";
import cross_icon from "../Assets/cross_icon.png";
import DashBoard from "../DashBorad/DashBoard";

const WebsiteList = () => {
  const [allwebproducts, setAllwebProducts] = useState([]);

  const removeProduct = async (id) => {
    await fetch("https://shopnjs.onrender.com/removeproducts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    fetch("https://shopnjs.onrender.com/allwebproducts")
      .then((res) => res.json())
      .then((data) => setAllwebProducts(data));
  };
  // Fetch all products from the server
  const fetchInfo = () => {
    fetch("https://shopnjs.onrender.com/allwebproducts")
      .then((res) => res.json())
      .then((data) => setAllwebProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <DashBoard />
      <div className="something">
        {/* <Sidebar /> */}
        <div className="listproduct">
          <h1>All WebSite change List</h1>
          <div className="listproduct-format-main">
            <p> websiteImage</p>{" "}
            {/* <p>Title</p>
          <p>offer Price</p>
          <p>New Price</p>
          <p>something</p>
          <p>Description</p> */}
            <p>Remove</p>
          </div>
          <div className="listproduct-allproducts">
            <hr />
            {allwebproducts.length > 0 ? (
              allwebproducts.map((website) => (
                <div
                  key={website._id}
                  className="listproduct-format-main listproduct-format"
                >
                  <img
                    className="listproduct-product-icon"
                    src={website.webimage1 || "placeholder.jpg"}
                    alt="Product"
                  />
                  <div className="listproduct-product-icons">
                    {website.webimage2 && (
                      <img
                        className="listproduct-product-icon"
                        src={website.webimage2}
                        alt="Product"
                      />
                    )}
                    {website.webimage3 && (
                      <img
                        className="listproduct-product-icon"
                        src={website.webimage3}
                        alt="Product"
                      />
                    )}
                    {website.webimage4 && (
                      <img
                        className="listproduct-product-icon"
                        src={website.webimage4}
                        alt="Product"
                      />
                    )}
                    {website.webimage5 && (
                      <img
                        className="listproduct-product-icon"
                        src={website.webimage5}
                        alt="Product"
                      />
                    )}
                    {website.webimage6 && (
                      <img
                        className="listproduct-product-icon"
                        src={website.webimage6}
                        alt="Product"
                      />
                    )}
                  </div>
                  {/* <p className="listproduct-product-title">{website.webname}</p>
                <p>Rs.{website.webold_price}</p>
                <p>Rs.{website.webnew_price}</p>
                <p>{website.webcategory}</p>
                <p>{website.webdescriptions}</p> */}
                  <img
                    className="listproduct-remove-icon"
                    onClick={() => {
                      removeProduct(website.id);
                    }}
                    src={cross_icon}
                    alt=""
                  />
                  <hr />
                </div>
              ))
            ) : (
              <p>No products available.</p>
            )}
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteList;
