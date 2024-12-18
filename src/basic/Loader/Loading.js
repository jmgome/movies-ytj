import React from "react";
import LoadingImg from "../../Assets/icons/LoadingImg.svg";
import LibertyArm from "../../Assets/icons/images.jpeg";
import corredor from "../../Assets/icons/corredor.gif";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading__container">
      <div className="loading d-flex justify-content-center align-items-center">
        <div className="combined-image">
          <img
            alt="Loading Spinner"
            src={LoadingImg}
            className="loading__spinner"
          />
          <img alt="Liberty Arm" src={corredor} className="logo" />
          <h3 className="legend">Ay Caramba...</h3>
        </div>
      </div>
    </div>
  );
};

export default Loading;
