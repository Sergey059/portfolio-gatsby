import React from 'react'

const expirience = () => {
	const timeline = [
		{year: "2021", desc: "Фриланс. В поисках дружного коллектива в web-студии на должность front-end developer, ui/ux designer."},
		{year: "2020", desc: "Интересное хобби переросло в желание работать в этой сфере. Фриланс - разработка проектов на заказ, доработка сайтов и отдельных компонентов."},
		{year: "2017", desc: "Прохождение курсов по web-разработке и дизайну. Создание сайтов и приложений для друзей и знакомых."},
		{year: "2016", desc: "Возникло желание и первоначальный план стать web-разработчиком, самостоятельное изучение HTML, CSS, jQuery (JS)"}
	]
	return (
		<section className="exp-ed">
			<h2 className="exp-ed__title">Expiriens & Education</h2>
			<div className="expiriens">
				<ul className="expiriens__list">
					<li className="expiriens__item">
						<div className="expiriens__year">2021</div>
						<p className="expiriens__desc">Фриланс. В поисках дружного коллектива в web-студии на должность front-end developer, ui/ux designer.</p>
					</li>
					<li className="expiriens__item">
						<div className="expiriens__year">2020</div>
						<p className="expiriens__desc">Интересное хобби переросло в желание работать в этой сфере. Фриланс - разработка проектов на заказ, доработка сайтов и отдельных компонентов.</p>
					</li>
					<li className="expiriens__item">
						<div className="expiriens__year">2017</div>
						<p className="expiriens__desc">Прохождение курсов по web-разработке и дизайну. Создание сайтов и приложений для друзей и знакомых.</p>
					</li>
					<li className="expiriens__item">
						<div className="expiriens__year">2016</div>
						<p className="expiriens__desc">Возникло желание и первоначальный план стать web-разработчиком, самостоятельное изучение HTML, CSS, jQuery (JS)</p>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default timeline
