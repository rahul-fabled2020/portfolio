import React from "react";

function ToggleSwitch(props) {
  return (
    <label className="switch">
      <input type="checkbox" onChange={(e) => document.body.classList.toggle("theme-dark")} />
      <span className="switch__slider switch__slider--round"></span>
    </label>
  );
}

export default ToggleSwitch;
