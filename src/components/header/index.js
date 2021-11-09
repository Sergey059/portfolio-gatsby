import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { menuData } from "../../data/MenuData";

import Logo from "../logo";



const Header = () => {
	const [show, setShow] = useState(false)
	return(
		<header className="header">
			<div className="container">

				<Logo />

				<nav className={show ? "nav active" : "nav"}>
					<ul className="nav__list">
						
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
				<button 
					className = {show ? "hamburger active" : "hamburger"}
					onClick={() => setShow(!show)}
					>
					<span className="hamburger__line"></span>
				</button>
			</div>
		</header>
	)
}

export default Header
