import * as React from "react"

import "../styles/main.sass"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className="content">{children}</main>
			<Footer />
		</>
	)
}

export default Layout
