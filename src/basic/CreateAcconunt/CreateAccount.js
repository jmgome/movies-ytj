import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";

export const CreateAccount = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }
    return age;
  };

  const onRegister = async () => {
    // Validación de edad mínima (18 años)
    const age = calculateAge(dob);
    if (age < 18) {
      setError("Debes ser mayor de 18 años para registrarte.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          dob,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("Registro exitoso.");
        setError("");
        navigate("/", { replace: true });
      } else {
        setError(data.message || "Error en el registro.");
      }
    } catch (error) {
      setError("Error al intentar registrarse.");
    }
  };

  return (
    <div className="Mainscreen">
      <div className="form">
        <h3>Registrarse</h3>
        <input
          className="inputs"
          type="text"
          placeholder="Nombre"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <input
          className="inputs"
          type="text"
          placeholder="Apellido"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <input
          className="inputs"
          type="date"
          placeholder="Fecha de Nacimiento"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br />
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
        <br />
        <input
          className="inputs"
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p>{error}</p>
        <p>{success}</p>
        <button onClick={onRegister} className="button">
          Registrarse
        </button>
      </div>
    </div>
  );
};
