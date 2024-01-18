import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("There is something wrong", error);
      });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Date</th>
            <th>Products</th>
          
          </tr>
        </thead>
        <tbody>
          {data.map((ecom) => (
            <tr key={ecom.id}>
              <td>{ecom.id}</td>
              <td>{ecom.userId}</td>
              <td>{ecom.date}</td>
              <td>
                {ecom.products.map((product) => (
                  <div key={product.productId}>
                    <div>Product Id: {product.productId}</div>
                    <div>Quantity: {product.quantity}</div>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App