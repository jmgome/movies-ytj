import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLogin = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Almacenar el nombre del usuario en localStorage
        localStorage.setItem("userName", data.user.firstName);
        localStorage.setItem("userName", data.user.lastName);

        // Emitir un evento personalizado para notificar que el usuario se ha logueado
        window.dispatchEvent(new Event("storageUpdate"));

        // Redirigir
        navigate("/MainRender", { replace: true });
      } else {
        setError("Credenciales incorrectas.");
      }
    } catch (error) {
      setError("Error al intentar iniciar sesión.");
    }
  };

  return (
    <div className="Mainscreen">
      <div className="form">
        <h3>Iniciar sesión</h3>
        <input
          className="inputs"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="inputs"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{error}</p>
        <div className="buttonLogin">
          <button onClick={onLogin} className="button">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};
