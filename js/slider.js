const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn__left");
const btnRigth = document.querySelector("#btn__rigth");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
	let sliderSectionFist = document.querySelectorAll(".slider__section")[0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all 0.7s";
	setTimeout(function () {
		slider.style.transition = "none";
		slider.insertAdjacentElement("beforeend", sliderSectionFist);
		slider.style.marginLeft = "-100%";
	}, 700);
}

btnRigth.addEventListener("click", function () {
	Next();
});

function Prev() {
	let sliderSection = document.querySelectorAll(".slider__section");
	let sliderSectionLast = sliderSection[sliderSection.length - 1];
	slider.style.marginLeft = "0";
	slider.style.transition = "all 0.7s";
	setTimeout(function () {
		slider.style.transition = "none";
		slider.insertAdjacentElement("afterbegin", sliderSectionLast);
		slider.style.marginLeft = "-100%";
	}, 700);
}

btnLeft.addEventListener("click", function () {
	Prev();
});

setInterval(function () {
	Next();
}, 4000);
