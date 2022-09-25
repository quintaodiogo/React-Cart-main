import React, { useState } from "react";
const Menu = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <a href="">Menu</a>
        </div>
      </nav> 
      <div className={menu_class}>
        <ul className="listItems">
          <li className="list">
            <a href="">Roupas</a>
          </li>
          <li className="list">
            <a href="">Acessórios</a>
          </li>
          <li className="list">
            <a href="">Carrinho</a>
          </li>
          <li className="list">
            <a href="">Entrar</a>
          </li>
          <li className="list">
            <a href="">Cadastrar</a>
          </li>
        </ul>
        <div className="search-container">
          <a className="search-btn desktop" href="#">
            <i className="fas fa-search search"></i>
          </a>
          <input
            type="text"
            className="input desktop"
            name="searchBox"
            placeholder="Pesquisar Produtos"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
