import React from "react";

function ScrollToBottomButton() {
  const handleClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      style={{
        //position: "fixed",
        //top: 20,
        //right: 20,
        padding: "10px 15px",
        backgroundColor: "#1976d2",
        color: "white",
        border: "none",
        borderRadius: 5,
        cursor: "pointer",
        fontWeight: "bold",
        marginTop: 20,
        display: "block",
        //marginLeft: "auto",
        marginRight: "auto",
        //zIndex: 1000,
      }}
      title="Ir al final de la página"
    >
      ↓
    </button>
  );
}

export default ScrollToBottomButton;
