import React from "react";
import "./checkbox.css"; // Archivo de estilos
import checkedIcon from "../../Assets/icons/Group.svg";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="checkbox-input"
        />
        <span className="checkbox-custom">
          {checked && <img src={checkedIcon} alt="Checked" />}
        </span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
