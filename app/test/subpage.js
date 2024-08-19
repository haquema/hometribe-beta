'use client'
import { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
            background: "white",
            height: 150,
            width: 240,
            margin: "auto",
            padding: "2%",
            border: "2px solid #000",
            borderRadius: "10px",
            boxShadow: "2px solid black",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = () => {
      setOpen(true);
  };

  return (
      <div
          style={{
              textAlign: "center",
              display: "block",
              padding: 30,
              margin: "auto",
          }}
      >
          <h1 style={{ color: "green" }}>
              GeeksforGeeks
          </h1>
          <h4>Modal Component in ReactJS?</h4>
          <button className="bg-red" type="button" onClick={handleOpen}>
              Click Me to Open Modal
          </button>
          <Modal isOpen={open} onClose={handleClose}>
              <>
                  <h1>GFG</h1>
                  <h3>A computer science portal!</h3>
              </>
          </Modal>
      </div>
  );
}