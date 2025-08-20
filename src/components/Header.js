import React from "react";

function Header() {
  return (
    <header
      style={{
        background: "#000", 
        padding: "20px",
        color: "white",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        borderBottom: "2px solid #1e90ff", 
        boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "28px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#1e90ff", 
        }}
      >
        ATIVIDADE SW
      </h1>
    </header>
  );
}

export default Header;
