import React from "react";

function MainFive() {
  return (
    <div className="container boxF">
      <h1 className="textFi">О КОМПАНИИ</h1>
      <div className="fathFive">
        <div className="imgEllip">
          <img className="imgEl" src="Ellip1.png" alt="" />
          <img className="imgEl2" src="Ellip2.png" alt="" />
          <img className="imgEl3" src="Ellip3.png" alt="" />
          <img className="imgElLogo" src="Ellip-logo.svg" alt="" />
        </div>
        <div className="father">
          <p className="father2">
            Группа компаний MEDOL создавалась высококвалифицированными
            специалистами в сфере медицины, инженерии и экономики, за плечами
            которых значительный опыт на рынке высоких медицинских технологий,
            которая имеет свои представительства в разных уголках Земли. В 2011
            году MEDO прозрачный долгосрочный бизнес, принести пользу обществу
            путем развития и внедрения передовых технологий в систему
            здравоохранения Республики Узбекистан.{" "}
          </p>
          <div className="btnTest">
            <button className="btnFiv">Узнать больше</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFive;
