import React, { useState, useEffect } from "react";
import "./Navbar.css";
import HamburgerMenu from "../MenuHamburguesa/HamburgerMenu";

export const Navbar = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    // Verificar si hay un nombre de usuario en el localStorage
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }

    // Escuchar el evento personalizado para actualizar el estado del nombre del usuario
    const handleStorageUpdate = () => {
      const updatedUserName = localStorage.getItem("userName");
      setUserName(updatedUserName);
    };

    window.addEventListener("storageUpdate", handleStorageUpdate);

    // Cleanup el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("storageUpdate", handleStorageUpdate);
    };
  }, []);

  return (
    <header>
      <div className="contenedor">
        <div className="title">
          <p>CINE PLUSS</p>
        </div>
        <div className="left-items">
          <div className="NameUser">
            {userName && <p>Bienvenid@, {userName}</p>}
          </div>
          <div className="hamburguer">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
