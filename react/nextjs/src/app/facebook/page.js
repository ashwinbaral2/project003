"use client";

import React, { useState } from "react";
import { GrLike } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { FaFaceLaughSquint } from "react-icons/fa6";

const Facebook = () => {
  const [color, setColor] = useState("black");
  const [reaction, setReaction] = useState("like");
  const [reactionDivOpen, setReactionDivOpen] = useState(false);
  const changeReaction = (newReaction) => {
    setReaction(newReaction);
    setColor(reaction === "like" ? "blue" : "black");
  };

  const ReactionDiv = () => {
    return (
      <div className="border-black  -m-2">
        <button className="bg-cyan-200 p-3 ">
          <GrLike
            onClick={() => {
              changeReaction("like");
            }}
            color={color}
          />
        </button>
        <button className="bg-pink-200 p-3 ">
          <FaHeart
            onClick={() => {
              changeReaction("love");
            }}
            color="red"
          />
        </button>
        <button className="bg-yellow-200 p-3 ">
          <FaFaceLaughSquint
            onClick={() => {
              changeReaction("haha");
            }}
            color="orange"
          />
        </button>
      </div>
    );
  };
  const GenerateReactionDiv = () => {
    <button className="bg-pink-200 p-3 ">
      <GrLike color={color} />
    </button>;
  };
  const generateReactionButton = () => {
    //we will have if else later, if reaction is like, show like button,,..... similar
    if (reaction === "love") {
      return (
        <button onMouseEnter={() => setReactionDivOpen(true)} className=" p-4 ">
          <FaHeart color="crimson" />
        </button>
      );
    } else if (reaction === "haha") {
      return (
        <button onMouseEnter={() => setReactionDivOpen(true)} className=" p-4 ">
          <FaFaceLaughSquint   color="orange" />
        </button>
      );
    } else {
      return (
        <button
          onMouseEnter={() => setReactionDivOpen(true)}
          className="bg-gray-200 p-4 border border-black"
        >
          <GrLike color={color} />
        </button>
      );
    }
  };
  //* ternary operator ?: is operator alternative for if else statements.
  //? do not use ternary operator for multiple else if statements.
  return (
    <div>
      {reactionDivOpen ? <ReactionDiv /> : null}
      {generateReactionButton()}
    </div>
  );
};

export default Facebook;
