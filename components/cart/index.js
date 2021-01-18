import React from "react";

export function Cart({ data }) {
  return (
    <div
      style={{
        background: "#eee",
        width: "250px",
        borderRadius: "5px",
        position: "absolute",
        right: "5px",
        top: "45px",
      }}
    >
      {data.map(({ id, title, quantity }) => (
        <div
          key={id}
          style={{
            display: "flex",
            borderBottom: "1px solid #bbb",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#000",
              padding: "0.5rem 0",
            }}
          >
            <h4 style={{ margin: "0 0.5rem" }}>{quantity}</h4>
            <h4>{title.substr(0, 15) + "..."}</h4>
          </div>
          <div style={{ margin: "0 1rem", cursor: "pointer" }}>
            <h2 style={{ color: "red" }}>x</h2>
          </div>
        </div>
      ))}
    </div>
  );
}