"use strict"

$("#country_selector").countrySelect({
	defaultCountry: "nl",
})

// megamenu start
if(document.querySelector('#megaMenuButton')){
	const megaMenuButton = document.querySelector('#megaMenuButton')
	megaMenuButton.addEventListener('click', function(){
		this.classList.toggle('active');
	})
}
if(document.querySelectorAll('#v-pills-tab button')){
	const navLinks = document.querySelectorAll('#v-pills-tab button');

	[...navLinks].forEach(navLink => {
		navLink.addEventListener('mouseover', function(){
			this.click();
		})
	})

	// megaMenuButton.addEventListener('mouseout', function(){
	// 	this.click();
	// 	this.classList.remove('active');
	// })


	// megaMenu.addEventListener('mouseover', function(){
	// 	if(!megaMenuButton.classList.contains('active')){
	// 		megaMenuButton.click();
	// 		megaMenuButton.classList.add('active');
	// 	}
	// })

	// megaMenu.addEventListener('mouseout', function(){
	// 	// if(!megaMenuButton.classList.contains('active')){
	// 		megaMenuButton.click();
	// 		megaMenuButton.classList.add('active');
	// 	// }
	// })

}

// megamenu end

if (document.querySelector(".brand-slider")) {
	var swiper = new Swiper(".brand-slider", {
		slidesPerView: 1,
		spaceBetween: 24,
		loop: true,
		freeMode: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		autoplay: {
			delay: 1600,
			disableOnInteraction: false,
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 40,
			},
		},
	})
}

if (document.querySelector(".product-gallary__thumbs")) {
	var gallary = new Swiper(".product-gallary__thumbs", {
		spaceBetween: 12,
		slidesPerView: 2,
		freeMode: true,
		watchSlidesProgress: true,
		breakpoints: {
			768: {
				slidesPerView: 4,
			},
			1024: {
				slidesPerView: 6,
			},
		},
	})
	var gallaryThumbs = new Swiper(".product-gallary", {
		spaceBetween: 16,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: gallary,
		},
	})
}

if (document.querySelector(".products-slider")) {
	var swiper = new Swiper(".products-slider", {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		freeMode: true,
		autoplay: {
			delay: 1200,
			disableOnInteraction: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 4,
			},
		},
	})
}

document.addEventListener("DOMContentLoaded", function () {
	if (document.getElementById("stucks-one")) {
		var stucksOne = new BVSelect({
			selector: "#stucks-one",
			width: "100%",
			searchbox: false,
			offset: true,
			placeholder: "Select Option",
			search_autofocus: true,
			breakpoint: 0,
		})
	}
	if (document.getElementById("stucks-two")) {
		var stucksTwo = new BVSelect({
			selector: "#stucks-two",
			width: "100%",
			searchbox: false,
			offset: true,
			placeholder: "Select Option",
			search_autofocus: true,
			breakpoint: 0,
		})
	}
	if (document.getElementById("stucks-three")) {
		var stucksThree = new BVSelect({
			selector: "#stucks-three",
			width: "100%",
			searchbox: false,
			offset: true,
			placeholder: "Select Option",
			search_autofocus: true,
			breakpoint: 0,
		})
	}
	if (document.getElementById("pieterSelect")) {
		var stucksThree = new BVSelect({
			selector: "#pieterSelect",
			width: "100%",
			offset: true,
			searchbox: false,
			search_autofocus: true,
			breakpoint: 0,
		})
	}
})

let rangeSlider = document.getElementById("price-range")
var nodes = [
	document.getElementById("lower-value"), // 0
	document.getElementById("upper-value"), // 1
]
if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
		connect: true,
		behaviour: "tap",
		start: [500, 4000],
		range: {
			// Starting at 500, step the value by 500,
			// until 4000 is reached. From there, step by 1000.
			min: [0],

			max: [1000],
		},
		// start: [200],
		// step: 30,
		// range: {
		// 	min: [0],
		// 	max: [1000],
		// },
	})

	rangeSlider.noUiSlider.on(
		"update",
		function (values, handle, unencoded, isTap, positions) {
			nodes[handle].innerHTML = Math.floor(values[handle]) + ",-"
		},
	)
}
