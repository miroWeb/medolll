import React from "react";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <h4 className="footerText1">Контакты</h4>
        <div className="juft1">
          <div className="mini1">
            <div className="footerLocation">
              <img src="location-icon.svg" alt="" />
            </div>
            <p className="footerP">г.Ташкент, Чиланзар 10 квартал, дом 3/1</p>
          </div>
          <div className="mini1">
            <div className="footerLocation">
              <img src="xat.svg" alt="" />
            </div>
            <p className="footerPemail">info@medol.uz </p>
          </div>
        </div>
        <div className="mini2">
          <div className="juft2">
            <div className="footerLocation">
              <img src="phone-call.svg" alt="" />
            </div>
            <p className="footerP">+998 71 276-62-53 +998 71 276-62-54</p>
          </div>
          <div>
            <button className="footerBtn">Оставить заявку</button>
          </div>
        </div>
        <div>
          <h4 className="footerText">О компании</h4>
          <span className="footerSpan">
            История <br /> Партнеры <br /> Вакансии
          </span>
        </div>
        <div>
          <h4 className="footerText">Продукция</h4>
          <p className="footerP2">
            Продукция Эндоваскулярная хирургия Аритмология Кардиохирургия
            Лабораторная диагностика Хирургия Эндоурология Нейрохирургия
            Анестезиология и реанимация Диабет
          </p>
        </div>
        <div>
          <h4 className="footerText">Услуги</h4>
          <p className="footerP3">Услуги Сервис Регистрации Услуги логистики</p>
        </div>
      </div>
      <div className="footer-logo">
        <img className="footerLo" src="footer-logo.svg" alt="" />
        <p className="footerLogoText">
          Наша цель – построить прозрачный, долгосрочный бизнес, приносить
          огромную пользу населению, путем решения глобальных вопросов. Внедряя
          инновационные технологии на рынок Узбекистана.
        </p>
      </div>

      {/* ---- */}
      {/* <div>
        <img className="" src="footer-logo.svg" alt="" />
      </div> */}
      {/* --- */}
      <div className="mini1No">
        <div className="footerLocation">
          <img src="location-icon.svg" alt="" />
        </div>
        <p className="footerP">г.Ташкент, Чиланзар 10 квартал, дом 3/1</p>
      </div>
      {/* ---- */}
      <div className="mini1None">
        <div className="footerLocation">
          <img src="xat.svg" alt="" />
        </div>
        <p className="footerPemail">info@medol.uz </p>
      </div>
      {/* --- */}
      <div className="juft2None">
        <div className="footerLocation">
          <img src="phone-call.svg" alt="" />
        </div>
        <p className="footerP">+998 71 276-62-53 +998 71 276-62-54</p>
      </div>
      {/* --- */}
      <button className="footerBtnNone">Оставить заявку</button>
      {/* --- */}
      <p className="footerLogoTextNone">
        Наша цель – построить прозрачный, долгосрочный бизнес, приносить
        огромную пользу населению, путем решения глобальных вопросов. Внедряя
        инновационные технологии на рынок Узбекистана.
      </p>
      {/* --- */}
      <div className="foot">
        <a className="footerA" href="#">
          &copy; 2021 ООО «Medical Online Services»
        </a>
        <span className="spanT">
          Сайт разработан компанией www.<a href="#">uz</a>{" "}
        </span>
      </div>
    </div>
  );
}

export default Footer;
