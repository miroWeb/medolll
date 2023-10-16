import React from "react";

function Main() {
  return (
    <div className="container">
      <div className="box">
        <div>
          <h2 className="textMain">Анализатор ABL800 FLEX</h2>
          <p className="spanMain">
            Ориентированный на среднюю или высокую производительность тестов,
            анализатор ABL800 FLEX измеряет полный набор параметров, включая pH,
            газы крови, электролиты, метаболиты и показатели оксиметрии
          </p>
          <div>
            <button className="btn">Подробнее</button>
          </div>
        </div>
        <div>
          <img className="imgMain" src="main-img.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
