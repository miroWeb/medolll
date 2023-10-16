import React from "react";

function Navbar() {
  return (
    <div className="container nav">
      <div className="loc-text">
        <div className="loc">
          <img src="location-icon.svg" alt="sd" />
        </div>
        <div className="logoMedia">
          <img src="logo-media.svg" alt="" />
        </div>
        <span className="span_loc_text">
          г.Ташкент, Чиланзар 10 квартал, дом 3/1
        </span>
      </div>
      <div className="loc-text">
        <div className="phone">
          <img src="phone-call.svg" alt="sd" />
        </div>
        <div className="phone_med">
          <img src="phone-med.svg" alt="" />
        </div>
        <span className="span_phone_text">
          +998 71 276-62-53 +998 71 276-62-54
        </span>
      </div>
      <div className="logoDiv">
        <img className="logo" src="logoo.svg" alt="logo" />
      </div>
      <div className="serFac">
        <div className="searchDiv">
          <div className="search">
            <img src="search.svg" alt="" />
          </div>
        </div>
        <div className="facRu">
          <div className="facDiv">
            <div className="fac">
              <img src="facebook.svg" alt="" />
              Мы на Facebook
            </div>
          </div>
        </div>
        <div className="ruDiv">
          <div className="rus">
            <img src="ru-icon.svg" alt="" />
            Русский
            <img src="arrow.svg" alt="" />
          </div>
          <div className="rusRes">
            <img src="ru-icon.svg" alt="" />
            <img src="arrow.svg" alt="" />
          </div>
        </div>
        <div className="burgerDiv">
          <div className="burger">
            <img src="burger.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
