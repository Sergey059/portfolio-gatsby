import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { menuData } from "../../data/MenuData";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__info">
				<div className="container">
					<p className="footer__title">Давайте работать вместе :)</p>
					<p className="footer__desc">Готов к нештатной работе</p>
					<AniLink paintDrip hex="#E33825" to="/contacts" className="btn footer__btn">Всегда на связи<i className="icon-arrow-right"></i></AniLink>
				</div>
			</div>
			<nav className="nav footer__nav">
				<ul className="nav__list">
					<li className="nav__item">
						<AniLink paintDrip hex="#E33825" className="nav__link" to="#">Brief<i className="icon-arrow-download"></i></AniLink>
					</li>
					{menuData.map((item, index) => (
							<li className="nav__item" key={index}>
								<AniLink paintDrip hex="#E33825"
									to={item.link}
									className="nav__link"
									activeClassName="active"
									>
									{item.title}
								</AniLink>
							</li>
						))}
				</ul>
			</nav>
			<div className="footer__copy">© 2021 Sergei Vedernikov</div>
		</footer>
	)
}

export default Footer