const toggleClasses = (element, isIntersecting) => {
	const classesToAdd = ['section--show']

	classesToAdd.forEach((className) => {
		if (isIntersecting) {
			element.classList.add(className)
		} else {
			setTimeout(() => {
				element.classList.remove(className)
			}, 300)
		}
	})
}

const onEntry = (entry) => {
	entry.forEach((change) => {
		toggleClasses(change.target, change.isIntersecting)
	})
}

const options = {
	threshold: [0.3],
}

const elementsToObserve = ['.opportunity', '.advantages']

const observe = new IntersectionObserver(onEntry, options)

elementsToObserve.forEach((selector) => {
	const element = document.querySelector(selector)
	if (element) {
		observe.observe(element)
	}
})
