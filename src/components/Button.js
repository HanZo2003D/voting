import React, { useState } from "react";

const Button = ({ onClick, children, style }) => {
  // Default styles
  const defaultStyle = {
    backgroundColor: "none",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s, color 0.3s", // Smooth transition
  };

  // Hover styles
  const hoverStyle = {
    backgroundColor: "blue",
    color: "white",
  };

  const [isHovered, setIsHovered] = useState(false);

  // Merge custom styles with default styles
  const mergedStyle = {
    ...defaultStyle,
    ...style,

    ...(isHovered ? hoverStyle : {}),
  };

  return (
    <button
      onClick={onClick}
      style={mergedStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default Button;
