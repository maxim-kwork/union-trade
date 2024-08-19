const showButton = document.querySelector('.types__btn')
const showCarsContainer = document.querySelector('.types__cars-show')
const carsContainer = document.querySelector('.types__cars')
const bodyButton = document.querySelector('.types__btn-body')
const bodyBrand = document.querySelector('.types__btn-brand')
const selectCurrency = document.querySelector('.header__select-currency')
const carPrice = document.querySelectorAll('.deals__card-price')
const arrows = document.querySelectorAll('.advantages__card-img')
const overlay = document.querySelector('.overlay')
const burger = document.querySelector('.burger')
const cardInfo = document.querySelectorAll('.footer__card-info')
const headerInner = document.querySelector('.header__top-inner')
const headerMain = document.querySelector('.header__main')
let changeButton = false
let showCars = false

const showCarsFunc = (container) => {
	container.innerHTML = `
    <div class="types__cars">
      <div class="types__cars-suv">
        <img src="images/types/suv.png" alt="suv" />
        <h4 class="types__cars-title">SUV</h4>
      </div>
      <div class="types__cars-sedan">
        <img src="images/types/sedan.png" alt="sedan" />
        <h4 class="types__cars-title">Sedan</h4>
      </div>
      <div class="types__cars-wagon">
        <img src="images/types/wagon.png" alt="wagon" />
        <h4 class="types__cars-title">Wagon</h4>
      </div>
      <div class="types__cars-hatch">
        <img src="images/types/hatch.png" alt="hatch" />
        <h4 class="types__cars-title">Hatch</h4>
      </div>
      <div class="types__cars-lite">
        <img src="images/types/lite.png" alt="lite" />
        <h4 class="types__cars-title">Lite</h4>
      </div>
      <div class="types__cars-lite">
        <img src="images/types/convertible.png" alt="convertible" />
        <h4 class="types__cars-title">Convertible</h4>
      </div>
    </div>`
}

if (showButton) {
	showButton.addEventListener('click', (e) => {
		e.preventDefault()
		if (!showCars) {
			showCarsFunc(showCarsContainer)
			setTimeout(() => {
				showButton.innerHTML = 'Hide all'
				showCarsContainer.classList.add('types__cars-show--active')
				showCars = true
			}, 300)
		} else {
			setTimeout(() => {
				showCarsContainer.classList.remove('types__cars-show--active')
				showButton.innerHTML = 'Show all'
				showCars = false
				setTimeout(() => {
					showCarsContainer.innerHTML = ''
				}, 500)
			}, 100)
		}
	})
}

if (bodyBrand) {
	bodyBrand.addEventListener('click', (e) => {
		e.preventDefault()
		carsContainer.innerHTML = `
  <div class="types__cars">
    <div class="types__cars-suv">
      <img src="images/makes/volvo.png" alt="volvo" width="188" height="144"/>
    </div>
    <div class="types__cars-sedan">
      <img src="images/makes/chevrolet.png" alt="chevrolet" width="188" height="144"/>
    </div>
    <div class="types__cars-wagon">
      <img src="images/makes/bugatti.png" alt="bugatti" width="188" height="144"/>
    </div>
    <div class="types__cars-hatch">
      <img src="images/makes/ford.png" alt="ford" width="188" height="144"/>
    </div>
    <div class="types__cars-lite">
      <img src="images/makes/bmw.png" alt="bmw" width="188" height="144"/>
    </div>
    <div class="types__cars-lite">
      <img src="images/makes/mercedes.png" alt="mercedes" width="188" height="144"/>
    </div>
  </div>`
		bodyBrand.classList.add('types__btn-brand--active')
		bodyButton.classList.remove('types__btn-body--active')
		showButton.style.display = 'none'
		changeButton = true
	})
}

if (bodyBrand) {
	bodyButton.addEventListener('click', (e) => {
		e.preventDefault()
		showCarsFunc(carsContainer)
		bodyButton.classList.add('types__btn-body--active')
		bodyBrand.classList.remove('types__btn-brand--active')
		showButton.style.display = 'block'
		changeButton = false
	})
}

selectCurrency.addEventListener('change', () => {
	if (selectCurrency.value === 'AED') {
		carPrice.forEach((price) => {
			price.innerHTML = '458 750 AED'
		})
	} else {
		carPrice.forEach((price) => {
			price.innerHTML = '57 346 000 KZT'
		})
	}
})

cardInfo.forEach((info) => {
	info.addEventListener('click', (e) => {
		e.preventDefault()
		const card = info.closest('.footer__card')
		const cardHoverText = card.querySelector('.footer__card-hover')
		cardHoverText.classList.toggle('footer__card-hover--show')
	})
})

burger.addEventListener('click', () => {
	headerInner.classList.toggle('header__top-inner--open')
	burger.classList.toggle('burger--crossed')
	overlay.classList.toggle('overlay--show')
	headerMain.classList.toggle('header__main--show')
})

document.addEventListener('click', (e) => {
	const closeOverlay = e.composedPath().includes(overlay)
	if (closeOverlay) {
		overlay.classList.remove('overlay--show')
		headerInner.classList.remove('header__top-inner--open')
		burger.classList.remove('burger--crossed')
		headerMain.classList.remove('header__main--show')
	}
})
