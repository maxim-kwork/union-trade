import langArr from './language-values.js'
const selectLanguage = document.querySelector('.header__select-language')
const availableLanguages = ['en', 'ru']

const changeURL = () => {
	const lang = selectLanguage.value
	location.href = window.location.pathname + '#' + lang
	location.reload()
}

const changeLanguage = () => {
	let hash = location.hash
	hash = hash.substring(1)
	if (!availableLanguages.includes(hash)) {
		location.href = window.location.pathname + '#en'
		location.reload()
	}
	selectLanguage.value = hash

	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key)
		if (elem) {
			elem.innerHTML = langArr[key][hash]
		}
	}

	const buttons = document.querySelectorAll('.lng-opportunity_btn')
	const info_btn = document.querySelectorAll('.lng-info_btn')

	buttons.forEach(button => {
		button.innerHTML = langArr['opportunity_btn'][hash]
	})

	info_btn.forEach(btn => {
		btn.innerHTML = langArr['info_btn'][hash]
	})

	document.querySelector('.header__top-span').innerHTML = langArr.subtitle[hash]
	// console.log(langArr.subtitle[hash]);
}

selectLanguage.addEventListener('change', changeURL)

document.addEventListener('DOMContentLoaded', changeLanguage)
