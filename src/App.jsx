import React from "react";
import "./style.css";
import Navlist from "./components/Navlist";
import Navlogo from "./components/Navlogo";
import logoImg from "./assets/logo.png";

const App = () => {
  const linkList = ["Home", "About", "Contact"];
  // const logo = "ecommerce";

  const handleLogin = () => {
    console.log("event trigered login");
  };

  const handleRedirect = (item) => {
    console.log(`event trigered redirect to ${item}`);
  };

  return (
    <div>
      <div className="navbar-wrapper">
        <Navlogo logo={logoImg} />
        <div className="navbar-container">
          <Navlist data={linkList} handleRedirect={handleRedirect} />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default App;
