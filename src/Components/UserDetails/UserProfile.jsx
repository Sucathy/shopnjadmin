import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./UserProfile.css";

const UserDetails = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch user data from the API
  const fetchInfo = async () => {
    try {
      const res = await fetch("http://52.90.235.25:4000/allusers");
      const data = await res.json();
      // Ensure data is an array
      if (Array.isArray(data)) {
        setAllUsers(data);
      } else {
        setAllUsers([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setAllUsers([]);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Filter users based on search term
  const filteredUsers = allUsers.filter((user) =>
    Object.values(user).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container">
      <Sidebar />
      <div className="listproduct">
        <h1>All User List</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="table">
          <div className="table-header">
            <div className="table-row">
              <div className="table-cell">_id</div>
              <div className="table-cell">name</div>
              <div className="table-cell">email</div>
              <div className="table-cell">Date</div>
              <div className="table-cell">gender</div>
              <div className="table-cell">lastName</div>
              <div className="table-cell">phoneNumber</div>
              <div className="table-cell">username</div>
              <div className="table-cell">created_at</div>
              <div className="table-cell">paymentStatus</div>
              <hr />
            </div>
          </div>
          <div className="table-body">
            {filteredUsers.map((user) => (
              <div className="table-row" key={user._id}>
                <div className="table-cell">{user._id}</div>
                <div className="table-cell">{user.name}</div>
                <div className="table-cell">{user.email}</div>
                <div className="table-cell">{user.date}</div>
                <div className="table-cell">{user.gender}</div>
                <div className="table-cell">{user.lastName}</div>
                <div className="table-cell">{user.phoneNumber}</div>
                <div className="table-cell">{user.username}</div>
                <div className="table-cell">{user.created_at}</div>
                <div className="table-cell">{user.paymentStatus}</div>
              </div>
            ))}
          </div>
        </div>
        <h2>Account Details</h2>
        <div className="table">
          <div className="table-header">
            <div className="table-row">
              <div className="table-cell">_id</div>
              <div className="table-cell">name</div>
              <div className="table-cell">username</div>
              <div className="table-cell">lastName</div>
              <div className="table-cell">phoneNumber</div>
              <div className="table-cell">email</div>
              <div className="table-cell">gender</div>
              <div className="table-cell">created_at</div>
              <hr />
            </div>
          </div>
          <div className="table-body">
            {filteredUsers.map((user) => (
              <div className="table-row" key={user._id}>
                <div className="table-cell">{user._id}</div>
                <div className="table-cell">{user.name}</div>
                <div className="table-cell">{user.username}</div>
                <div className="table-cell">{user.lastName}</div>
                <div className="table-cell">{user.phoneNumber}</div>
                <div className="table-cell">{user.email}</div>
                <div className="table-cell">{user.gender}</div>
                <div className="table-cell">{user.created_at}</div>
              </div>
            ))}
          </div>
        </div>
        <h2>Order Details</h2>
        <div className="table">
          <div className="table-header">
            <div className="table-row">
              <div className="table-cell">_id</div>
              <div className="table-cell">orders</div>
              <hr />
            </div>
          </div>
          <div className="table-body">
            {filteredUsers.map((user) => (
              <div className="table-row" key={user._id}>
                <div className="table-cell">{user._id}</div>
                <div className="table-cell">
                  <div className="table">
                    <div className="table-header">
                      <div className="table-row">
                        <div className="table-cell">Order ID</div>
                        <div className="table-cell">Products</div>
                        <div className="table-cell">Amount</div>
                        <div className="table-cell">Receipt</div>
                        <div className="table-cell">Payment Status</div>
                        <div className="table-cell">Order Date</div>
                        <div className="table-cell">Payment ID</div>
                        <div className="table-cell">Shipping Address</div>
                        <hr />
                      </div>
                    </div>
                    <div className="table-body">
                      {user.orders && user.orders.length > 0 ? (
                        user.orders.map((order) => (
                          <div className="table-row" key={order.orderId}>
                            <div className="table-cell">{order.orderId}</div>
                            <div className="table-cell">
                              {order.products.map((product, productIndex) => (
                                <div
                                  className="product-cell"
                                  key={productIndex}
                                >
                                  <div>
                                    <img
                                      src={product.image}
                                      alt={`Product ${product.productId}`}
                                      style={{
                                        width: "200px",
                                        height: "200px",
                                      }}
                                    />
                                  </div>
                                  <div>Product ID: {product.productId}</div>
                                  <div>Quantity: {product.quantity}</div>
                                  <hr />
                                </div>
                              ))}
                            </div>

                            <div className="table-cell">{order.orderId}</div>
                            <div className="table-cell">
                              {order.amount} {order.currency}
                            </div>
                            <div className="table-cell">{order.receipt}</div>
                            <div className="table-cell">
                              {order.paymentStatus}
                            </div>
                            <div className="table-cell">{order.orderDate}</div>
                            <div className="table-cell">{order.paymentId}</div>
                            <div className="table-cell">
                              <div>{order.shipping_address?.username}</div>
                              <div>{order.shipping_address?.lastName}</div>
                              <div>{order.shipping_address?.phoneNumber}</div>
                              <div>{order.shipping_address?.flatHouse}</div>
                              <div>{order.shipping_address?.fullAddress}</div>
                              <div>{order.shipping_address?.pinCode}</div>
                              <div>{order.shipping_address?.state}</div>
                              <div>{order.shipping_address?.city}</div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="table-row">
                          <div className="table-cell">No orders available</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
