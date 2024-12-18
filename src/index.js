import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Loading from "./basic/Loader/Loading";
import { LoginPage } from "./basic/Login/Login";
import { Navbar } from "./basic/Navbar/Navbar";
import { MainRender } from "./MainRender/MainRender";
import { CreateAccount } from "./basic/CreateAcconunt/CreateAccount";

const RootComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            path="CreateAcconunt"
            element={isLoading ? <Loading /> : <CreateAccount />}
          />
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/MainRender"
            element={isLoading ? <Loading /> : <MainRender />}
          />
        </Routes>
      )}
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
