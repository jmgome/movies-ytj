import React, { useEffect, useState } from "react";
import { Card } from "../basic/Card/Card";
import Loading from "../basic/Loader/Loading";
import "./MainRender.css";

export const MainRender = () => {
  const [data, setData] = useState([]); // Estado inicial es un array vacío

  const getData = async () => {
    try {
      const resp = await fetch("http://localhost:4000/api/movies"); // Cambia la URL para apuntar a tu API local
      const json = await resp.json();
      console.log(json); // Verifica la estructura de los datos
      setData(json.data || []); // Ajusta según la estructura que devuelve tu API
    } catch (err) {
      setData([{ title: "Error", description: err.message }]); // Manejo de errores
    }
  };

  useEffect(() => {
    getData(); // Se ejecuta una vez al montarse el componente
  }, []); // El array vacío asegura que se ejecute una vez

  return (
    <div className="App">
      {data.length > 0 ? (
        data.map((item, index) => (
          <Card
            key={index}
            title={item.name} // Asegúrate de que estás accediendo al campo correcto
            description={item.description || "Sin descripción"} // Ajusta según los datos
            imageUrl={item.image} // Usa una imagen por defecto si no hay
            buttonUrl={item.video}
          />
        ))
      ) : (
        <div>No hay datos disponibles</div> // Mensaje si no hay datos
      )}
    </div>
  );
};
