import React, { useState } from 'react'
import { Link } from 'gatsby'

import LayoutContacts from "../components/layout-contacts"
import Seo from "../components/seo"
import Social from '../components/social'


const Contacts = () => {
	const [show, setShow] = useState(false)
	
	return (
		<LayoutContacts>
			<Seo title="Контакты" />
			<section className="general contacts">
				<div className="container">
					<div className="general__info">
						<h1 className="title"># Contacts</h1>
						<p className="desc">Я буду рад ответить на все интересующие Вас вопросы и обсудить перспективы совместной работы</p><a className="contact" href="tel:+79124833219"><span className="contact_bold">tel:</span>+7 (912) 483 32 19</a><a className="contact" href="mailto:sergeiv-82@mail.ru"><span className="contact_bold">e-mail:</span>sergeiv-82@mail.ru</a>
					
						<Social />
						
						<button className="btn-icon general__btn general__btn_none" onClick={() => setShow(!show)}><i className="icon-telegram"></i>Оставить сообщение</button>
					</div>
					<span className="general__circle"></span>

					<div className = {show ? "form-box active" : "form-box"}>
						<button className="btn-close"  onClick={() => setShow(!show)}>✕</button>
						<form className="form" name="contact" method="POST" data-netlify="true">
							<div className="form__item">
								<label className="form__title form__title_none" htmlFor="name">Введите имя:</label>
								<input className="form__input" id="name" type="text" name="name" placeholder="Ваше имя*" required />
							</div>
							<div className="form__item">
								<label className="form__title form__title_none" htmlFor="mail">Введите e-mail:</label>
								<input className="form__input" id="mail" type="email" name="mail" placeholder="Ваш e-mail*" required />
							</div>
							<div className="form__item form__item_mb">
								<label className="form__title form__title_none" htmlFor="message">Оставить сообщения:</label>
								<textarea className="form__input" id="message" name="message" placeholder="Текст сообщения"></textarea>
							</div>
							<div className="form__item form__item_mb">
								<label className="form__title form__title_file" htmlFor="file"><i className="icon-clip"></i>Прикрепить файл</label>
								<input className="form__file" id="file" type="file" name="file" accept=".jpg, .pdf, .doc, .docx, .xlsx" />
							</div>
							<div className="form__item form__item_mb">
								<label className="form__title form__title_dfx">
									<input className="form__checkbox" id="checkbox" type="checkbox" required />
									<span className="form__text">
										Я принимаю условия 
										<Link className="form__link" to="#">пользовательского соглашения </Link>
										и согласен на обработку персональных данных
									</span>
								</label>
							</div>
							<button className="btn form__btn">Отправить<i className="icon-arrow-right"></i></button>
						</form>
					</div>
					
				</div>
			</section>
		</LayoutContacts>
	)
}

export default Contacts
