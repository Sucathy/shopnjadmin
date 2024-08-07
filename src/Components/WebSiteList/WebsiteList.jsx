import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const WebsiteList = () => {
  const [allwebproducts, setAllwebProducts] = useState([]);

  // Fetch all products from the server
  const fetchInfo = () => {
    fetch("http://34.229.212.238:4000/allwebproducts")
      .then((res) => res.json())
      .then((data) => setAllwebProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="something">
      <Sidebar />
      <div className="listproduct">
        <h1>All WebSite change List</h1>
        <div className="listproduct-format-main">
          <p> website change</p>
          <p>Title</p>
          <p>offer Price</p>
          <p>New Price</p>
          <p>something</p>
          <p>Description</p>
          <p>Images</p>
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
                <p className="listproduct-product-title">{website.webname}</p>
                <p>Rs.{website.webold_price}</p>
                <p>Rs.{website.webnew_price}</p>
                <p>{website.webcategory}</p>
                <p>{website.webdescriptions}</p>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
          <hr />
        </div>
      </div>
    </div>
  );
};

export default WebsiteList;
