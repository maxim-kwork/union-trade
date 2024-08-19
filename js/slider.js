const slider = new Splide('#slider', {
	pagination: false,
	breakpoints: {
		800: {
			width: '360px',
			height: '270px',
		},
	},
})
slider.mount()
