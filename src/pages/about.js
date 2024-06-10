import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from "../components/seo"
import Social from '../components/social'
import Sertificates from '../components/sertificates'
import Ability from '../components/ability'


const About = () => {
	return (
		<Layout>
			<Seo title="Обо мне" />

			<section className="general">
				<div className="container">
					<div className="general__info">
						<h1 className="title"># About me</h1>
						<p className="desc">“Выбери себе работу по душе, и тебе не придётся работать ни одного дня в своей жизни”</p>
						<Link className="btn-icon general__btn" to="#"><i className="icon-arrow-download"></i>resume.pdf (140kB)</Link>
					</div>
					<div className="general__promo">
						<StaticImage
							placeholder="dominantColor"
							className="general__img"
							src="../images/photo-2.jpg"
							alt="Фото" />
					</div>
				</div>
				<span className="general__circle"></span>
			</section>

			<div className="aboutme">
        <div className="container">
          <aside className="sidebar">
            <p className="sidebar__title">Sergei Vedernikov</p>
						<a className="contact" href="tel:+79124833219"><span className="contact_bold">tel:</span>+7 (912) 483 32 19</a>
						<a className="contact" href="mailto:sergeiv-82@mail.ru"><span className="contact_bold">e-mail:</span>sergeiv-82@mail.ru</a>
            <Social />
						<AniLink paintDrip hex="#E33825" className="btn general__btn" to="/contacts">Оставить сообщение<i className="icon-arrow-right"></i></AniLink>
          </aside>
          <div className="aboutme__box">
            <div className="aboutme__desc">
              <p className="text">Я действующий  frontend-разработчик. У меня есть желание заниматься созданием профессиональных пользовательских интерфейсов и веб-приложений. В основном специализируюсь на разработке сайтов, а также редактированием фотографий, брендингом, кадрированием изображений и другими услугами графического дизайна.</p>
              <p className="text">По началу, разработка сайтов было моим увлечением, сейчас эта страсть перешла в нечто большее. Начинал с освоения Photoshop и Adobe XD, потом Figma, но на данный момент понимаю, что дизайн - это второстепенно, мне больше по душе работать с готовым дизайном и переводить его в код.</p>
							<p className="text">За последние пять+ лет освоил Figma, Photoshop, Adobe XD. Уверенно владею HTML, CSS, JS, а также препроцессорами для их компиляции. Прошел путь верстальщика от таблиц, до современных гридов и флексбоксов. С легкостью конфигурирую webpack и gulp. В основном работу веду через git. Свободно воспринимаю и ориентируюсь в документации к фреймворкам и библиотекам, в том числе и на английском языке.</p>
							<p className="text">Постоянно занимаюсь саморазвитием и повышением уровня образования. Я не останавливаюсь на достигнутом и продолжаю самосовершенствоваться. Я всегда работаю над улучшением качества моих услуг, чтобы не отставать от конкурентов и постоянно меняющихся условий.</p>
							<p className="text">Обладаю нижеописанными навыками:</p>
            </div>

            <div className="skils">
              <section className="skils__design">
                <h2 className="skils__title">Creative Design</h2>
                <div className="progress">
                  <div className="progress__item">
                    <p className="progress__title">Figma</p>
                    <div className="progress__bar progress__bar_figma"></div>
                    <p className="progress__desc">Проектирую web-интерфейсы для десктопных и мобильных устройств</p>
                  </div>
                  <div className="progress__item">
                    <p className="progress__title">Adobe Photoshop</p>
                    <div className="progress__bar progress__bar_photoshop"></div>
                    <p className="progress__desc">С лёгкостью выполняю обработку изображений для создания единого стиля сайта</p>
                  </div>
                  <div className="progress__item">
                    <p className="progress__title">Adobe Illustrator</p>
                    <div className="progress__bar progress__bar_illustrator"></div>
                    <p className="progress__desc">Разрабатываю иллюстрации, логотипы, svg-иконки и векторную графику</p>
                  </div>
                  <div className="progress__item">
                    <p className="progress__title">Adobe After Effects</p>
                    <div className="progress__bar progress__bar_aftereffects"></div>
                    <p className="progress__desc">Работаю с анимационной графикой и визуальными эффектами</p>
                  </div>
                  <div className="progress__item">
                    <p className="progress__title">Adobe Premiere Pro</p>
                    <div className="progress__bar progress__bar_premiere"></div>
                    <p className="progress__desc">Обрабатываю видеоматериалы для формирования единого стиля</p>
                  </div>
                </div>
              </section>

              <section className="skils__dev">
                <h2 className="skils__title">Development</h2>
                <div className="progress">
                  <div className="progress__item">
                    <p className="progress__title">html, css, javascript</p>
                    <div className="progress__bar progress__bar_html"></div>
                    <p className="progress__desc">Выполняю верстку и стилизацию с добавлением интерактива и анимации на сайте</p>
                  </div>
                  <div className="progress__item">
                    <p className="progress__title">Sass, Pug, TypeScript</p>
                    <div className="progress__bar progress__bar_preproc"></div>
                    <p className="progress__desc">Уверенно владею препроцессорами и конфигурацией сборщиков проектов</p>
                  </div>
                  <div className="progress__item">
                    <p className="progress__title">React, Gatsby, Next</p>
                    <div className="progress__bar progress__bar_react"></div>
                    <p className="progress__desc">Создаю web-интерфейсы и приложения при помощи фреймворков основанных на ReactJS</p>
                  </div>
                  <div className="progress__item">
                    <p className="progress__title">Node, Nest, Express</p>
                    <div className="progress__bar progress__bar_node"></div>
                    <p className="progress__desc">Успешно работаю с микросервисной архитектурой и фреймворками</p>
                  </div>
                  <div className="progress__item">
                    <p className="progress__title">MongoDB, Firebase</p>
                    <div className="progress__bar progress__bar_firebase"></div>
                    <p className="progress__desc">Работаю с прогрессивными облачными хранилищами и сервисами</p>
                  </div>
                </div>
              </section>

            </div>
            <section className="exp-ed">
              <h2 className="exp-ed__title">Expiriens & Education</h2>
              <div className="expiriens">
                <ul className="expiriens__list">
		  <li className="expiriens__item">
                    <div className="expiriens__year">2023 по н.в.</div>
                    <p className="expiriens__desc">Продолжаю работать на фриланс биржах, веду поддержку выполненных проектов</p>
                  </li>
		  <li className="expiriens__item">
                    <div className="expiriens__year">2022-2023</div>
                    <p className="expiriens__desc">Прошел и заавершил обучение в университете Geekbrains по программе дополнительного профессионального образования "Fullstack JavaScript" с присвоением диплома на ведение профессиональной деятельности в сфере "Связь, информационные и коммуникационные технологии.</p>
                  </li>
                  <li className="expiriens__item">
                    <div className="expiriens__year">2021</div>
                    <p className="expiriens__desc">Работаю фрилансером над разными проектами.</p>
                  </li>
                  <li className="expiriens__item">
                    <div className="expiriens__year">2020</div>
                    <p className="expiriens__desc">Интересное хобби переросло в желание работать в этой сфере. Принимал участие в проектах по разработке, доработке сайтов и их отдельных компонентов</p>
                  </li>
                  <li className="expiriens__item">
                    <div className="expiriens__year">2019</div>
                    <p className="expiriens__desc">Качественно изучил HTML и CSS. Обучался в Школе Uprock «Профессия UX/UI дизайнер сайтов»</p>
                  </li>
                  <li className="expiriens__item">
                    <div className="expiriens__year">2018</div>
                    <p className="expiriens__desc">Получил навыки владения кроссбраузерной, адаптивной, валидной версткой в курсе от WebForMySelf: «Верстка-Мастер». Занимался активной практикой</p>
                  </li>
                  <li className="expiriens__item">
                    <div className="expiriens__year">2017</div>
                    <p className="expiriens__desc">Осваивал курсы по web-разработке и дизайну.</p>
                  </li>
                  <li className="expiriens__item">
                    <div className="expiriens__year">2016</div>
                    <p className="expiriens__desc">Самостоятельно изучал HTML, CSS, jQuerry (JS). Прошёл обучение по курсу Geekbrains: «Профессия Веб-разработчик»</p>
                  </li>
                </ul>
              </div>
              <Sertificates />
            </section>

						<Ability />

          </div>
        </div>
      </div>


		</Layout>
	)
}

export default About
