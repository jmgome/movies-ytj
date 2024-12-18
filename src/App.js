import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Checkbox from "./basic/Check/check";
import checkedIcon from "../src/Assets/icons/notification.svg";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
    console.log(
      `Checkbox está ${checked ? "seleccionado" : "no seleccionado"}`
    );
  };

  return (
    <div>
      <div style={{ padding: "12px", borderRadius: "50%" }}>
        <h1>Componente Checkbox</h1>
        <Checkbox
          label="Aceptar términos y condiciones"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div style={{ padding: "12px", borderRadius: "50%" }}>
        <Checkbox
          label="Aceptar términos y condiciones"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="container">
        <div className="conten-imagen">
          <img height={"40px"} src={checkedIcon} alt="Checked" />
        </div>
        <div className="content">
          <div className="text">
            <p>
              ¿No puedes ingresar con tu <br /> número de documento? <br />
              <a className="link" href="#">
                Haz clic aquí
              </a>
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* __________________________________________________________ */}
      <div className="container2">
        <div className="conten-imagen2">
          <img height={"30px"} src={checkedIcon} alt="Checked" />
        </div>
        <div className="content2">
          <div className="text2">
            <span className="textoss">
              Si no puedes ingresar
              <a className="link" href="#">
                clic aquí
              </a>
              o comunicate: Bogotá
              <span className="telefono">6013077050</span> - Resto del país{" "}
              <span className="telefono">018000113390</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
