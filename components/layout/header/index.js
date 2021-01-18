import React, { useState, useContext } from "react";
import Link from "next/link";

import { Cart } from "../../cart";

import PostContext from "../../../context/context";

export function Header() {
  const [showCart, setShowCart] = useState(false);

  const { state } = useContext(PostContext);
  const { cart } = state;

  return (
    <div
      style={{
        background: "teal",
        width: "100%",
        height: "56px",
        display: "flex",
        justifyContent: "space-between",
        color: "#fff",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div style={{ margin: "0 1rem", cursor: "pointer" }}>
        <Link href="/">
          <h1>Post Mart</h1>
        </Link>
      </div>
      <div
        style={{ margin: "0 1rem", cursor: "pointer" }}
        onClick={() => setShowCart(!showCart)}
      >
        <h3>
          cart
          <sup
            style={{
              background: "#000",
              padding: "0 0.3rem",
              borderRadius: "5px",
              margin: "0 0.5rem",
            }}
          >
            {cart.length}
          </sup>
        </h3>
      </div>
      {showCart && <Cart data={cart} />}
    </div>
  );
}
