import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "./style.sass"

function Logo() {
	return (
		<AniLink paintDrip hex="#E33825" to="/" className="logo">
			<i className="icon-logo-mini"></i>
		</AniLink>
	)
}

export default Logo