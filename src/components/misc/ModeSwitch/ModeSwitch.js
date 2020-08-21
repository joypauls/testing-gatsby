import React from "react";
import { WiDaySunny, WiStars } from "react-icons/wi";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

import './ModeSwitch.css';

const LIGHT_MODE_COLOR = "#D9DE97"
const DARK_MODE_COLOR = "#9A91B3"

const ModeSwitch = ({ mode, handleToggle }) => {

  var color = mode === "default" ?  LIGHT_MODE_COLOR : DARK_MODE_COLOR
  var isChecked = mode !== "default"

  return (
    <>
      <input
        checked={isChecked}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{ background: color }}
      >
        <span className="react-switch-button" />
        <div style={{display: "flex", alignItems: 'center',justifyContent: 'space-between', width: "100%", padding: "4px"}}>
          <FaRegMoon color="#FFF" />
          <FaRegSun color="#FFF" />
        </div>
      </label>
    </>
  );
};

export default ModeSwitch;
