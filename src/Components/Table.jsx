import React from "react";

function Table({ orders, filterBy, searchBy, sortBy }) {
  let newOrders = orders;
  //to filter
  newOrders = newOrders.filter(
    (order) => filterBy === "All" || order.status === filterBy
  );
  //to Search
  newOrders = newOrders.filter(
    (order) =>
      searchBy === "" ||
      order.customerName.toLowerCase().startsWith(searchBy.toLowerCase()) ||
      order.id.toString().startsWith(searchBy)
  );

  //to sort button
  newOrders = newOrders.sort((a, b) => {
    if (sortBy) {
      return new Date(b.createdAt) - new Date(a.createdAt); // descending b-a
    } else {
      return new Date(a.createdAt) - new Date(b.createdAt); // ascending a-b
    }
  });

  return (
    <div>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Items</th>
            <th>Created At</th>
          </tr>
        </thead>

        {newOrders.length > 0 ? (
          <tbody>
            {newOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.status}</td>
                <td>{order.items.join(", ")}</td>
                <td>{order.createdAt}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tr>
            <td className="no-orders-msg">No orders found</td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default Table;
