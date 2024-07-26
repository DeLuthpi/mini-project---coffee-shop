let list = document.querySelector("ul");
const btn = document.getElementById("btn-hamburger");
const icon = document.getElementById("icon-hamburger");

btn.addEventListener("click", () => {
	if (icon.classList.contains("fa-bars")) {
		icon.classList.add("fa-xmark");
		icon.classList.remove("fa-bars");
		list.classList.add("opacity-100");
	} else {
		icon.classList.add("fa-bars");
		icon.classList.remove("fa-xmark");
		list.classList.remove("opacity-100");
	}
});

// Get the button
const btnToTop = document.getElementById("btnToTop");

// When the user scrolls down 300px from the top of the document, show the button
const scrollFunction = () => {
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		btnToTop.classList.remove("hidden");
	} else {
		btnToTop.classList.add("hidden");
	}
};
const backToTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

// When the user clicks on the button, scroll to the top of the document
btnToTop.addEventListener("click", backToTop);
window.addEventListener("scroll", scrollFunction);
