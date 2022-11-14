//dropdown code gg
document.addEventListener("click", e => {
	const isDropdownButton = e.target.matches("[data-dropdown-button]")
	if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
	let currentDropdown
	if (isDropdownButton) {
	  currentDropdown = e.target.closest("[data-dropdown]")
	  currentDropdown.classList.toggle("active")
	}
  
	document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
	  if (dropdown === currentDropdown) return
	  dropdown.classList.remove("active")
	})

})

// small-screen code may need to switch to aria hidden!
const mobileNav = document.querySelector(".navbar-smallscreen-links");
const mobileToggle = document.querySelector(".mobile-toggle");


mobileToggle.addEventListener("click", () => {
	const visibility = mobileNav.getAttribute("data-visible");
	
	if (visibility === "false") {
		mobileNav.setAttribute("data-visible", true);
		mobileToggle.setAttribute("aria-expanded",true);

	} else if (visibility === "true") { 
		mobileNav.setAttribute("data-visible", false);
		mobileToggle.setAttribute("aria-expanded",false);

	}

});


// slider 
window.addEventListener('load', () => {
	let sliderElement = document.getElementById('infiniteSliding');
	const container = sliderElement.querySelector(".slider-container");

	const infiniteScrollToFirstWhenOnLast = () => {
		if (container.lastElementChild == container.querySelector('.slide-visible')) {
			container.scroll({
				left: 0,
				behavior: "instant"
			});
		}
	};
	//Append the first slide as the last
	container.appendChild(container.firstElementChild.cloneNode(true));
	//Add an additional indicator button to keep counts correct
	sliderElement.querySelector(".slider-indicators").appendChild(sliderElement.querySelector(".slider-indicators").lastElementChild.cloneNode(true));
	swiffyslider.onSlideEnd(sliderElement, infiniteScrollToFirstWhenOnLast, 90);
});

  