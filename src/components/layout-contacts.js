import * as React from "react"

import "../styles/main.sass"
import Header from "./header"

const LayoutContacts = ({ children }) => {
	return (
		<>
			<Header />
			<main className="content">{children}</main>
		</>
	)
}

export default LayoutContacts
