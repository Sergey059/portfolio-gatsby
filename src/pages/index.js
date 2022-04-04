import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Photo from "../components/photo"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <Seo title="S.Vedernikov" />
    <section className="general">
      <div className="container">
        <div className="general__info">
          <h1 className="title">
            {" "}
            <span className="title_red">Creative design </span>& development
          </h1>
          <p className="desc">
            Привет! Я Сергей Ведерников - увлеченный Front-end разработчик и UI
            / UX дизайнер из России.
          </p>
          <AniLink
            paintDrip
            hex="#E33825"
            className="btn general__btn"
            to="/projects"
          >
            Мои работы<i className="icon-arrow-right"></i>
          </AniLink>
        </div>
        <div className="general__promo">
          <Photo />
        </div>
      </div>
      <span className="general__circle"></span>
    </section>

    <section className="about">
      <div className="container">
        <h2 className="section-title">Обо мне</h2>
        <div className="about__box">
          <p className="about__desc">
            Мне 39 лет. У меня сильная страсть к web-дизайну и технологиям. Я
            специализируюсь на Front-End разработке и UI / UX дизайне. Мое
            любимое занятие - это создание элегантных пользовательских
            интерфейсов и web-сайтов. Сочетая современные технологии и свои
            знания, я могу создавать профессиональные web-сайты и приложения.
          </p>
          <div className="progress about__progress">
            <div className="progress__item">
              <p className="progress__title">Creative design</p>
              <div className="progress__bar progress__bar_design"></div>
              <p className="progress__desc">
                Figma, Adobe&nbsp;Photoshop, Adobe&nbsp;Illustrator,
                Adobe&nbsp;After&nbsp;Effects, Adobe&nbsp;Premiere&nbsp;Pro
              </p>
            </div>
            <div className="progress__item">
              <p className="progress__title">Front-end development</p>
              <div className="progress__bar progress__bar_front"></div>
              <p className="progress__desc">
                HTML, CSS, JS, Gulp, Webpack, Sass, Pug, ReactJS
              </p>
            </div>
            <div className="progress__item">
              <p className="progress__title">Back-end development</p>
              <div className="progress__bar progress__bar_back"></div>
              <p className="progress__desc">
                NestJS, GatsbyJS, ExpressJS, MySQL, GraphQL, MongoDB, Firebase
              </p>
            </div>
          </div>
          <AniLink
            paintDrip
            hex="#E33825"
            className="btn about__btn"
            to="about"
          >
            Узнать больше<i className="icon-arrow-right"></i>
          </AniLink>
        </div>
      </div>
    </section>

    <section className="projects">
      <div className="container">
        <h2 className="section-title">Мои проекты</h2>
        <div className="projects__box">
          <Projects totalCount="3" classes="project__img project__img_left" />
          <AniLink
            paintDrip
            hex="#E33825"
            className="btn projects__btn"
            to="projects"
          >
            Все проекты<i className="icon-arrow-right"></i>
          </AniLink>
        </div>
      </div>
    </section>

    <section className="plan">
      <div className="container">
        <h2 className="section-title section-title__note">План работы</h2>
        <ol className="plan__list">
          <li className="plan__item">
            <h3 className="plan__title">Briefing</h3>
            <p className="plan__desc">
              Я знакомлюсь с вашим проектом. Узнаю всё о сроках, материалах, о
              целях и о ваших пожеланиях.
            </p>
          </li>
          <li className="plan__item">
            <h3 className="plan__title">Analytics</h3>
            <p className="plan__desc">
              Оцениваю структуру сайтов конкурентов, их сильные стороны и
              особенности, цветовые схемы, визуальные решения, которые они
              использовали
            </p>
          </li>
          <li className="plan__item">
            <h3 className="plan__title">Prototyping</h3>
            <p className="plan__desc">
              На основе собранной информации создаю прототип будущего сайта,
              согласовываю его с клиентом, дорабатываю недочеты
            </p>
          </li>
          <li className="plan__item">
            <h3 className="plan__title">Design</h3>
            <p className="plan__desc">
              Прорабатываю айдентику сайта и разрабатываю визуализацию его
              применения
            </p>
          </li>
          <li className="plan__item">
            <h3 className="plan__title">Development</h3>
            <p className="plan__desc">
              По утверждению дизайна я превращаю его в реальный код, используя
              HTML, CSS и JavaScript, с учетом передовых практик.
            </p>
          </li>
          <p className="plan__note">
            При наличии готового дизайна, работаю по пунктам 1, 2 и 5,
            дополнительные условия обговариваем при связи.
          </p>
        </ol>
      </div>
    </section>
  </Layout>
)

export default IndexPage
