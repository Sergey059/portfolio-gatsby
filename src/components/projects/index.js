import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Projects = ({totalCount, classes}) => {
	const data = useStaticQuery(graphql`
		query ProjectsQuery {
			allProjectsJson {
				totalCount
				edges {
					node {
						design
						development
						img {
							publicURL
						}
						name
						url
						year
					}
				}
			}
		}
	`)
	function getProjects(totalCount = data.allProjectsJson.totalCount) {
		const projectsArray = []
		const projects = data.allProjectsJson.edges
		for (let i = 0; i < totalCount; i++) {
			const item = projects[i];
			let showDesign = item.node.design
			let showDev = item.node.development
			projectsArray.push(

				<a className="project projects__item" href={item.node.url} key={i} target="_blank" rel="noreferrer">
					<div className="project__info">
						<h3 className="project__title">{item.node.name}</h3>
						<ul className="project__list">
							{showDesign ? <li className="project__item">UI/UX Design</li> : ""}
							{showDev ? <li className="project__item">Development</li> : ""}
							<li className="project__item">{item.node.year}</li>
						</ul>
					</div>
					<img className = {classes} src={item.node.img.publicURL} alt={item.node.name}/>
				</a>

			)	
			
		}
		return projectsArray;
	}
	return (
		<div className="projects__list">
			{ getProjects(totalCount, classes) }
		</div>
	)
}

export default Projects
