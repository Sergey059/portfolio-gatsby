import React from 'react'

const Ability = () => {
	const ability = [
		"Целеустремлённость",
		"Ответственный подход к делу",
		"Умение работать в команде",
		"Эмоциональная устойчивость",
		"Аккуратность и внимательность",
		"Склонность к саморазвитию",
		"Лёгкая обучаемость",
		"Усидчивость"
	]
	return (
		<section className="ability">
			<h2 className="ability__title">Эти навыки помогают мне в работе и жизни</h2>
			<ul className="ability__list">

				{ability.map((i, item) => (

					<li className="ability__item" key={i}>{ability[item]}</li>
						
				))}

			</ul>
		</section>
	)

}
export default Ability
