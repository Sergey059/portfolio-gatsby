import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticImage } from 'gatsby-plugin-image'

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Страница не найдена" />
			<div className="error-page">
				<div className="container">
					<StaticImage
					placeholder="dominantColor"
					className="error-page__img"
					src="../images/404.svg"
					alt="Ошибка страница не найдена" />
				<h1 className="title error-page__title">404: Страница не найдена</h1>
				<AniLink paintDrip hex="#E33825" className="btn general__btn" to = "/">На главную<i className="icon-arrow-right"></i></AniLink>
				</div>
			</div>
  </Layout>
)

export default NotFoundPage
