"use client";

import React, { useState } from "react";
import { GrLike } from "react-icons/gr";

const Facebook = () => {
  const [color, setColor] = useState("blue");
  const handleColorChange = () => {
    setColor((prevColor) => (prevColor === "green" ? "red" : "green"));
  };
  return (
    <div>
      <button
        onClick={() => handleColorChange()}
        className="bg-pink-200 p-3 border border-black"
      >
        <GrLike color={color} />
      </button>
    </div>
  );
};

export default Facebook;
