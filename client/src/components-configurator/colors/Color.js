import { useState, useRef, useEffect, Component } from "react";
import "../home/Home.css";
import "../../index.css";
export const Color = ({ background, onClick }) => {
  const divBackgroundImage = {
    backgroundImage: "url(" + background.texture + ")",
  };

  const divBackgroundColor = {
    background: background.color,
  };

  return (
    <>
      <div
        className="tray__swatch"
        style={background.texture ? divBackgroundImage : divBackgroundColor}
        onClick={onClick}
      ></div>
    </>
  );
};
