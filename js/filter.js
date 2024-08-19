const sidebar = document.querySelector('.main__sidebar')
const optionSelected = document.querySelector('.main__sidebar-select')
const sidebarFilter = document.querySelector('.main__sidebar-filter')
const saveChanges = document.querySelector('.main__sidebar-btn')
const cars = document.querySelectorAll('.deals__card')

optionSelected.addEventListener('change', e => {
	e.preventDefault()
	if (optionSelected.value === '-') {
		sidebar.style.width = '320px'
		sidebar.style.height = '125px'
		sidebarFilter.innerHTML = ''
	} else if (optionSelected.value === 'price') {
		sidebar.style.height = '300px'
		sidebarFilter.innerHTML = `
            Price:
            <div class="main__sidebar-range">
                <input
                    type="number"
                    class="main__sidebar-min"
                    placeholder="Min"
                />
                <input
                    type="number"
                    class="main__sidebar-max"
                    placeholder="Max"
                />
            </div>`
	} else if (optionSelected.value === 'transmission') {
		sidebar.style.height = '215px'
		sidebarFilter.innerHTML = `
        Transmission:
        <select class="main__sidebar-filter-transmission">
            <option value="AWD">AWD</option>
            <option value="RWD">RWD</option>
            <option value="FWD">FWD</option>
        </select>`
	} else if (optionSelected.value === 'engine') {
		sidebar.style.height = '300px'
		sidebarFilter.innerHTML = `
            Engine (lt):
            <div class="main__sidebar-range">
                <input
                    type="number"
                    class="main__sidebar-min"
                    placeholder="Min"
                />
                <input
                    type="number"
                    class="main__sidebar-max"
                    placeholder="Max"
                />
            </div>`
	}
})

const parsePrice = priceString => {
	const cleanedString = priceString.replace(/[^0-9.,]/g, '')
	const number = parseFloat(cleanedString.replace(',', '.'))

	return !isNaN(number) ? number : NaN
}

const filterCarsByPrice = (minPrice, maxPrice) => {
	cars.forEach(car => {
		const carPrice = parsePrice(
			car.querySelector('.deals__card-price').textContent
		)
		if (!isNaN(carPrice) && carPrice >= minPrice && carPrice <= maxPrice) {
			car.style.display = 'block'
		} else {
			car.style.display = 'none'
		}
	})
}

const filterCarsByTransmission = () => {
	const selectedTransmission = document.querySelector(
		'.main__sidebar-filter-transmission'
	).value
	cars.forEach(car => {
		const carTransmission = car.querySelector(
			'.deals__card-transmission'
		).textContent
		if (carTransmission === selectedTransmission) {
			car.style.display = 'block'
		} else {
			car.style.display = 'none'
		}
	})
}

const filterCarsByEngine = (minEngine, maxEngine) => {
	cars.forEach(car => {
		const carEngine = parseFloat(
			car.querySelector('.deals__card-engine').textContent
		)
		if (!isNaN(carEngine) && carEngine >= minEngine && carEngine <= maxEngine) {
			car.style.display = 'block'
		} else {
			car.style.display = 'none'
		}
	})
}

saveChanges.addEventListener('click', e => {
	e.preventDefault()
	if (optionSelected.value === 'price') {
		const minPriceInput = document.querySelector('.main__sidebar-min')
		const maxPriceInput = document.querySelector('.main__sidebar-max')

		const minPrice = parsePrice(minPriceInput.value)
		const maxPrice = parsePrice(maxPriceInput.value)

		if (!isNaN(minPrice) && !isNaN(maxPrice)) {
			filterCarsByPrice(minPrice, maxPrice)
		}
	} else if (optionSelected.value === 'transmission') {
		filterCarsByTransmission()
	} else if (optionSelected.value === 'engine') {
		const minEngineInput = document.querySelector('.main__sidebar-min')
		const maxEngineInput = document.querySelector('.main__sidebar-max')

		const minEngine = parseFloat(minEngineInput.value)
		const maxEngine = parseFloat(maxEngineInput.value)

		if (!isNaN(minEngine) && !isNaN(maxEngine)) {
			filterCarsByEngine(minEngine, maxEngine)
		}
	}
})
