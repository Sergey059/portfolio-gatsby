import React from 'react'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Projects from "../../components/projects"


function MyProjects() {
	return (
		<Layout>
			<Seo title="Мои работы"/>

			<section className="general">
				<div className="container">
					<div className="general__info">
						<h1 className="title"># My projects</h1>
						<p className="desc">с 2016 по 2021 год</p>
					</div>
					<p className="general__intro">Interface design & developmen</p>
				</div>
				<span className="general__circle"></span>
			</section>

			<section className="projects projects_white">
        <div className="container">
          <Projects classes="project__img project__img_right"/>
				</div>
			</section>

		</Layout>
	)
}

export default MyProjects
