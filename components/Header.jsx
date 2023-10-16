import React from "react";

function Header() {
  return (
    <div className="container">
      <div className="head">
        <h4>МАГАЗИН</h4>
        <img src="str.svg" alt="" />
        <div className="do">
          <h4 className="text">О КОМПАНИИ</h4>
          <img className="doira" src="doira.svg" alt="" />
        </div>
        <img src="str.svg" alt="" />
        <h4>ПРОДУКЦИЯ</h4>
        <img src="str.svg" alt="" />
        <h4>УСЛУГИ</h4>
        <img src="str.svg" alt="" />
        <h4>АКЦИИ И НОВОСТИ</h4>
        <img src="str.svg" alt="" />
        <h4>ОБРАТНАЯ СВЯЗЬ</h4>
      </div>
    </div>
  );
}

export default Header;
