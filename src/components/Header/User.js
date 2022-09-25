import React from "react";
import "../../styles/navbar.css";
const User = ({ setShow, size }) => {
  return (
    <div className="user-container">
      <a className="userIcon cadastro" href="">
        Cadastro
      </a>
      <a className="userIcon login" href="">
        Entrar
      </a>
    </div>
  );
};

export default User;
