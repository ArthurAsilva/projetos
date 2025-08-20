import React from "react";

function Cartao({ foto, nome, profissao, descricao }) {
  return (
    <div
      style={{
        background: "#000",
        color: "#f5f5f5",
        borderRadius: "15px",
        padding: "20px",
        width: "280px",
        textAlign: "center",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.6)",
        margin: "20px auto",
        border: "1px solid #1e90ff",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
    >
      <img
        src={foto}
        alt={nome}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          border: "3px solid #1e90ff",
          marginBottom: "10px",
        }}
      />
      <h2 style={{ margin: "10px 0 5px", fontSize: "20px" }}>{nome}</h2>
      <h4 style={{ margin: "5px 0", fontSize: "14px", color: "#1e90ff" }}>
        {profissao}
      </h4>
      <p style={{ fontSize: "13px", color: "#dcdcdc" }}>{descricao}</p>
    </div>
  );
}

export default Cartao;
