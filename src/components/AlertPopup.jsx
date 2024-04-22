import React from "react";

const TextPopup = ({ rowTitle, row1, onClose }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderRadius: "4rem",
          zIndex: 999,
        }}
        onClick={onClose} // Close the popup when clicking on the overlay
      ></div>
      <div className="textPopupAlert">
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "right",
            marginTop: "-1rem",
            marginRight: "-0.8rem",
          }}
        >
          <button onClick={onClose}>X</button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "orange",
            fontSize: "1.5rem",
            paddingTop: "1rem",
            width: "15rem",
          }}
        >
          {rowTitle}
          <br /> <br />
        </div>

        <span
          style={{
            color: "gray",
            fontSize: "1rem",
          }}
        >
          {row1}
        </span>
      </div>
    </>
  );
};

const AlertPopup = ({ row1, rowTitle, onClick, isOpen }) => {
  const handleTextClose = () => {
    onClick();
  };

  return (
    <>
      {isOpen && (
        <TextPopup rowTitle={rowTitle} row1={row1} onClose={handleTextClose} />
      )}
    </>
  );
};

export default AlertPopup;
