import React, { useState, useEffect } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState(null);

  // Obtener el nombre de usuario desde localStorage cuando se monta el componente
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.removeItem("userName");
    setUserName(null);
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "/";
  };

  const currentPath = window.location.pathname; // Obtenemos el pathname actual

  return (
    <div className="hamburger-menu">
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`menu ${isOpen ? "show" : ""}`}>
        <ul>
          {!userName && currentPath !== "/" && (
            <li>
              <a onClick={logout} style={{ cursor: "pointer" }}>
                Cerrar Sesión
              </a>
            </li>
          )}
          {!userName && currentPath === "/" && (
            <li>
              <a href="CreateAcconunt">Crear cuenta</a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
