import React from "react";

function MainThre() {
  return (
    <div className="container mainThre">
      <h1 className="textTh">ПРОДУКЦИЯ</h1>
      <div className="grid">
        <div className="gr1">
          <img src="grid1.png" alt="" />
          <p className="pGrid">Эндоваскулярная хирургия</p>
          <button className="btnGr">Посмотреть все</button>
        </div>
        <div className="gr2">
          <img className="imgGr" src="grid2.png" alt="" />
          <p className="pGrid">Лабораторная диагностика</p>
          <button className="btnGr2">Посмотреть все</button>
        </div>
        <div className="gr3">
          <img src="grid3.png" alt="" />
          <p className="pGrid">Кардиохирургия</p>
          <button className="btnGr">Посмотреть все</button>
        </div>
        <div className="gr4">
          <img className="imgGr" src="grid4.png" alt="" />
          <p className="pGrid">ДИАБЕТ</p>
          <button className="btnGr">Посмотреть все</button>
        </div>
        <div className="gr5">
          <div className="gr1_5">
            <img className="imgGr" src="grid5.png" alt="" />
            <p className="pGrid">ЭНДОУРОЛОГИЯ</p>
            <button className="btnGr">Посмотреть все</button>
          </div>
        </div>
        <div className="gr6">
          <div className="gr1_6">
            <img src="grid6.png" alt="" />
            <p className="pGrid">АРИТМОЛОГИЯ</p>
            <button className="btnGr">Посмотреть все</button>
          </div>
        </div>
      </div>
      <div className="mainFot">
        <h3 className="textMainFot">Перейти в каталог нашей продукции</h3>
        <img className="imgRig" src="img-rig.svg" alt="" />
      </div>
      <h3 className="textH3Fot">УСЛУГИ</h3>
    </div>
  );
}

export default MainThre;
