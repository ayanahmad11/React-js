/*
!~ Design
* Header
*   -Logo
*   -Nav Items
* Body
*   -Search
*   -restaurant Container
*       -restaurant card
*           -img
*           -Name of res, star rating,cuisine, delivery tie
* Footer
*   - Copyright
*   - Links
*   - Address
*   - Contact
*/
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo">
        <img src = "https://static.vecteezy.com/system/resources/previews/010/949/977/non_2x/burger-planet-logo-design-food-cafe-and-restaurant-logo-concept-vector.jpg" className="img"></img>
    </div>
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Cart</li>
        </ul>
    </div>
  </div>
);

const styleCard = {
  backgroundColor: "yellow",
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <h3>Meghna Foods</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="Body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestaurantCard/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
