import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./Nav.css";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div className="nav">
      <Menu className="nav" fluid widths={4}>
        <Menu.Item
          name="HOME"
          active={activeItem === "Home"}
          onClick={handleItemClick}
          as={Link}
          to="/"
          id="home"
        />
      <Menu.Item
          name="WEB DESIGN"
          active={activeItem === "web"}
          onClick={handleItemClick}
          as={Link}
          to="/web"
          id="web"
        />
        <Menu.Item
          name="PRODUCTS"
          active={activeItem === "products"}
          onClick={handleItemClick}
          as={Link}
          to="/products"
          id="products"
        />
        <Menu.Item
          name="CONTACT"
          active={activeItem === "contact"}
          onClick={handleItemClick}
          as={Link}
          to="/contact"
          id="contact"
        />
      </Menu>  
    </div>
  );
}