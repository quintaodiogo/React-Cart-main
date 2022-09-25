import React from "react";
import "../../styles/navbar.css";
const User = ({ setShow, size }) => {
  return (
    <div className="user-container">
      <a className="userIcon cadastro desktop" href="">
        Cadastro
      </a>
      <a className="userIcon login desktop" href="">
        Entrar
      </a>
      <a className="note">Menu</a>
    </div>
  );
};

export default User;
