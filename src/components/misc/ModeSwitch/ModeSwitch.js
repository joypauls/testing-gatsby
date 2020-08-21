import React from 'react';
import './ModeSwitch.css';

const ModeSwitch = ({ mode, handleToggle }) => {

  var color = mode === "default" ?  "#DFE861" : "#7C7394"
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
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default ModeSwitch;
