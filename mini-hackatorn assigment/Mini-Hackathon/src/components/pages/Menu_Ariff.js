// Menu.js

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Menu.css";
import "../../App.css";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fake-coffee-api.vercel.app/api")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
        setLoading(false);
      });
  }, []);

  const renderPaginationDots = () => {
    return Array.from({
      length: Math.ceil(menuItems.length / itemsPerPage),
    }).map((_, index) => (
      <span
        key={index}
        className={`pagination-dot ${
          index + 1 === currentPage ? "active" : ""
        }`}
        onClick={() => paginate(index + 1)}
      ></span>
    ));
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const itemsPerRow = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menuItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="menu-container">
      {/* Hero section */}
      <div
        className="menu"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/image/Hero4.jpg)`,
        }}
      >
        <h1 className="menu">MENU</h1>
      </div>

      {/* ProductSection */}
      <h1 className="menu-heading">Our Coffee Products</h1>
      <div className="menu-container">
        <div className="row">
          {/* Coffee Card 1 */}
          <div className="col-md-4 py-3 py-md-0 mt-3">
            <Card className="coffee-card">
              <Card.Img
                variant="top"
                src="/image/menu/coffee2.jpeg"
                style={{ height: "400px" }}
              />
              <Card.Body>
                <Card.Title>White</Card.Title>
                <Card.Text>
                  A classic caffe latte
                  <br /> Serving Size: Typically 1 ounce.
                  <br /> Characteristics: Bold and intense flavor with a thick
                  crema.
                  <br /> Price: RM12.00
                </Card.Text>
                <Button variant="success">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>

          {/* Coffee Card 2 */}
          <div className="col-md-4 py-3 py-md-0 mt-3">
            <Card className="coffee-card">
              <Card.Img
                variant="top"
                src="/image/menu/coffee3.jpeg"
                style={{ height: "400px" }}
              />
              <Card.Body>
                <Card.Title>Americano</Card.Title>
                <Card.Text>
                  Strong and bold americano, perfect to boosten up your morning!
                  <br /> Serving Size: Varies, often around 8-12 ounces.
                  <br /> Characteristics: Similar strength to drip coffee but
                  smoother.
                  <br /> Price: RM8.99
                </Card.Text>
                <Button variant="success">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>

          {/* Coffee Card 3 */}
          <div className="col-md-4 py-3 py-md-0 mt-3">
            <Card className="coffee-card">
              <Card.Img
                variant="top"
                src="/image/menu/coffee5.jpg"
                style={{ height: "400px" }}
              />
              <Card.Body>
                <Card.Title>Caramel Macchiato</Card.Title>
                <Card.Text>
                  Caramel latte with less coffee and delightful caramel sauce on
                  top.
                  <br />
                  Serving Size: Usually around 2 ounces.
                  <br /> Characteristics: Strong espresso flavor with a touch of
                  creaminess. <br />
                  Price: RM14.99
                </Card.Text>
                <Button variant="success">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>

          {/* Coffee Card 4 */}
          <div className="col-md-4 py-3 py-md-0 mt-3">
            <Card className="coffee-card">
              <Card.Img
                variant="top"
                src="/image/menu/coffee1.jpeg"
                style={{ height: "400px" }}
              />
              <Card.Body>
                <Card.Title>Latte</Card.Title>
                <Card.Text>
                  Espresso with a larger amount of steamed milk and a thin layer
                  of foam. The right dose of coffee and milk, sweetened with
                  organic brown sugar. Made specially for everyone, perfect
                  compliment for every moment, and suitable at every place.
                  <br /> Serving Size: Often 8-12 ounces.
                  <br />
                  Characteristics: Creamy and milder than a cappuccino. <br />
                  Price: RM10.99
                </Card.Text>
                <Button variant="success">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>

          {/* Coffee Card 5 */}
          <div className="col-md-4 py-3 py-md-0 mt-3">
            <Card className="coffee-card">
              <Card.Img
                variant="top"
                src="/image/menu/coffee4.jpg"
                style={{ height: "400px" }}
              />
              <Card.Body>
                <Card.Title>Caffe Mocha</Card.Title>
                <Card.Text>
                  Our signature caffe latte with intense coffee and sweet
                  chocolate paste.Latte with chocolate syrup or cocoa powder.
                  <br /> Serving Size: Varies, often 8-16 ounces.
                  <br /> Characteristics: Sweet and chocolatey with espresso and
                  milk.
                  <br /> Price: RM14.99
                </Card.Text>
                <Button variant="success">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>

          {/* Coffee Card 6 */}
          <div className="col-md-4 py-3 py-md-0 mt-3">
            <Card className="coffee-card">
              <Card.Img
                variant="top"
                src="/image/menu/coffee6.jpg"
                style={{ height: "400px" }}
              />
              <Card.Body>
                <Card.Title>Matcha Latte</Card.Title>
                <Card.Text>
                  Creamy and leafy, the best twist of Japanese classic drink.
                  <br /> Serving Size: Typically a dessert-sized portion.
                  <br />
                  Characteristics: A delightful combination of hot and cold,
                  bitter and sweet. <br />
                  Price: RM14.99
                </Card.Text>
                <Button variant="success">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* APISection */}
      <h1 className="menu-heading">Other Products You May Like</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="row">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className={`col-md-${12 / itemsPerRow} py-3 py-md-0 mt-3`}
              >
                <Card className="coffee-card">
                  <Card.Img
                    variant="top"
                    src={item.image_url}
                    style={{ height: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      Description: {item.description} <br />
                      Region: {item.region} <br />
                      Price: ${item.price.toFixed(2)}
                    </Card.Text>
                    <Button variant="success">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <div className="pagination-container">{renderPaginationDots()}</div>
        </>
      )}
    </div>
  );
}

export default Menu;
