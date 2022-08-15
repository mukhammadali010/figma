import React from "react";
import "./Style.css";
import "./css/bootstrap.css";


class App extends React.Component{
  render(){
    return(
      <div>
        <section className="blok1">
          <div className="container">
          <header>
            <div className="bosh">
              <div className="row">
                <div className="col-lg-2">
                  <h1>Forest</h1>
                  <p>Inveromental</p>
                  <div className="chiziq"></div>
                </div>
                <div className="col-lg-4">
                <nav>
                  <ul>
                    <li><a href="#" className="glav">Главная</a></li>
                    <li><a href="#">Онас</a></li>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">Проекты</a></li>
                    <li><a href="#">Консультация</a></li>
                    <li><a href="#">Контакты</a></li>
                  </ul>
                </nav>
                </div>
                <div className="col-lg-6">
                      <div className="ikonka">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-youtube"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                      </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 ch">
                    <div className="ver_chiziq"></div>
                </div>
                <div className="col-lg-4">
                    <h1>посреди <span>леса</span> далеко от шума</h1>
                    <p>Равным образом реализация намеченных плановых заданий широкому кругу (специалистов) участие в формировании</p>
                    <a href="#"><div className="snami">Связаться с нами</div></a>
                </div>
                <div className="col-lg-6">
                  <a href="#" className="play"> <i className="bi bi-play"></i></a>
                  <div className="nuqtalar">
                    <a href="#" className="nt"></a>
                    <a href="#" className="nt"></a>
                    <a href="#" className="nt"></a>
                    <a href="#" className="nt"></a>
                    <a href="#" className="st"><i className="bi bi-chevron-down"></i></a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1">
                  <p>01/<span>04</span></p>
                </div>
                <div className="col-lg-offset-6 col-lg-5">
                  <div className="minks">
                    <p>Минск</p>
                    <p className="sana">12.06.2021г.</p>
                    <div className="home">
                      <a><i className="bi bi-play"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          </div>
        </section>
        <section className="blok2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1>О НАС</h1>
                <div className="prinsp">
                  <div className="chiziq2"></div>
                  <h2><span className="pr">принципы</span> которых
мы придерживаемся</h2>
                </div>
                <h1 className="nol1">01</h1>
                <h2 className="kaches"><span className="kach">Качества</span></h2>
                <p>Равным образом реализация намеченных плановых заданий широкому кругу (специалистов) участие в формировании вилла в лесу </p>
        
                <h1 className="nol1">02</h1>
                <h2 className="kaches"><span className="kach">Креативность</span></h2>
                <p>Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий</p>
        
                <h1 className="nol1">03</h1>
                <h2 className="kaches"><span className="kach">Современность</span></h2>
                <p>Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий играет важную роль в формировании позиций </p>
              </div>
              <div className="col-lg-6">
                <div className="uyrasm">
                  <a href="#"><i className="bi bi-play"></i></a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h1 className="chto">Что мы можем?</h1>
                <div className="indiv">
                  <div className="chiziq3"></div>
                  <h2><span>индивидуальное</span></h2>
                  <h2>проектирование вашех домов</h2>
                  <p>на выбор подходяший раззмер и конфигурация дома для разных 
земельных участок и разного состава семьи ( молодая пара. семья с
маленьким ребенком, дом для большой семьи).Мы сможем установить дом где угодно - на участке перед вышем домом, в лесной зоне, на береге реки. Доставку осуществляет наша компания</p>
                  <a href="#" >Подробнее об услугах</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dacha">
                  <a href="#"><i className="bi bi-play"></i></a>
                </div>
              </div>
            </div>
            <div className="row sonlar">
                <div className="col-lg-4">
                  <h1>9</h1>
                  <p>лет опыта работы</p>
                </div>
                <div className="col-lg-4">
                  <h1>13</h1>
                  <p>крутых  дизайнеров иархитекторов</p>
                </div>
                <div className="col-lg-4">
                  <h1>103</h1>
                  <p>проектов во всех регионах страны</p>
                </div>
            </div>
            <div className="row">
              <h1>Проекты</h1>
              <div className="komp">
                <div className="chiziq4"></div>
                <h1>проекты компании</h1>
              </div>
              <div className="col-lg-4 c1">
                <div className="hra1">
                  <h3>лесный дом в Новосибирске</h3>
                  <div className="hrchiziq"></div>
                  <a href="#"><i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
              <div className="col-lg-4 c2">
              <div className="hra1">
                  <h3>Коттедж в Краснодаре</h3>
                  <div className="hrchiziq"></div>
                  <a href="#"><i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
              <div className="col-lg-4 c3">
              <div className="hra1">
                  <h3>Коттедж в Новгороде</h3>
                  <div className="hrchiziq"></div>
                  <a href="#"><i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
              <div className="col-lg-12">
                <a href="#"><i className="bi bi-chevron-left"></i></a>
                <div className="chiziq5">
                  <div className="chiziq6"></div>
                </div>
                <a href="#"><i className="bi bi-chevron-right"></i></a>
              </div>
              <div className="col-lg-6">
                <h1>ПАРТНЕРЫ</h1>
                <div className="nash">
                  <div className="chiziq7"></div>
                  <h3>наши партнеры</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="logo1"></div>
              </div>
              <div className="col-lg-3">
                <div className="logo2"></div>
              </div>
              <div className="col-lg-3">
                <div className="logo3"></div>
              </div>
              <div className="col-lg-3 ">
                <div className="logo4"></div>
              </div>
              <div className="col-lg-3 lll">
                <div className="logo1"></div>
              </div>
              <div className="col-lg-3 lll">
                <div className="logo2"></div>
              </div>
              <div className="col-lg-3 lll">
                <div className="logo3"></div>
              </div>
              <div className="col-lg-3 lll">
                <div className="logo4"></div>
              </div>
            </div>
            <div className="row consul">
              <div className="col-lg-6">
                <div className="consch">
                <div className="chiziq8"></div>
                <h1>Консультация</h1>
                </div>
                <p>Персональный менеджер свяжется с вами в течение 15 минут</p>
                <input type={"text"} placeholder="Nosirov Muhammadali"></input>
                <input type={"email"} placeholder="Email"></input>
                <input type={"number"} placeholder="Telefon"></input>
                <div className="chek2">
                  <input type={"checkbox"} className="chek"></input>
                  <p>Согласен(на) с обработкой персональных данных</p>
                </div>
                <div className="ostavit">
                  <a href="#"><h4>ОСТАВИТЬ ЗАЯВКУ</h4></a>
                </div>
              </div>
              <div className="col-lg-6 kontakt">
              <div className="consch">
                <div className="chiziq8"></div>
                <h1>КОНТАКТЫ</h1>
              </div>
                <p className="ofis">Наш офис:</p>
                <p className="moskva">г.Москва ул. Ломоносова д. 169:00-21:00 Без выходных</p>
                <p>+8 800 800 80 80</p>
                <p>Электронная почта:</p>
                <p>ForestINVERONMENTAL@mail.ru</p>
                <div className="ikonka">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-youtube"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-1">
                <h1>FOREST</h1>
                <p>Inveromental</p>
              </div>
              <div className="col-lg-2 col-lg-offset-1">
                <h5>© Все право защищены 2021</h5>
              </div>
              <div className="col-lg-3">
              <nav>
                  <ul>
                    <li><a href="#">Онас</a></li>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">Проекты</a></li>
                    <li><a href="#">Консультация</a></li>
                    <li><a href="#">Контакты</a></li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-5">
                <div className="arrov">
                  <a href="#"><i className="bi bi-arrow-up"></i></a>
                </div>
                <div className="ikonka">
                        <a href="#"><i className="bi bi-telegram"></i></a>
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-youtube"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div> 
    )
  }
}
export default App