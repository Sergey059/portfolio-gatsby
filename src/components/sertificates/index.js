import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'

const Sertificates = () => {
	const data = useStaticQuery(graphql`
		query SertificatesQuery {
			allSertificatesJson {
				edges {
					node {
						name
						img {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
				}
			}
		}
	`)
	function getSertificates(data) {
		const sertificatesArray = [];
		const sertificates = data.allSertificatesJson.edges;
		sertificates.map( (item, index) => 
			sertificatesArray.push(

				<li className="education__item" key = {index}>
					<GatsbyImage
						className = "education__img"
						placeholder = "blurred"
						image = {getImage(item.node.img.childImageSharp.gatsbyImageData)}
						alt = {item.node.name}
					/>
				</li>
			
			)
		)
		return sertificatesArray;
	}
	return (
		<div className="education">
			<ul className="education__list">
				{getSertificates(data)}
			</ul>
		</div>
	)
}

export default Sertificates
