import React from "react";
import "./Card.css";

export const Card = ({ title, description, imageUrl, buttonUrl }) => {
  // Función para truncar la descripción si es demasiado larga
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">
          {truncateDescription(description, 200)}
        </p>
        <div className="container_button">
          <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
            <button className="card-button">GO TO MOVIE</button>
          </a>
        </div>
      </div>
    </div>
  );
};
