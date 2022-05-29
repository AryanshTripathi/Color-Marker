let data = document.querySelector(".writing-space");

const classes = ["red", "green", "blue", "yellow", "black"];

classes.forEach((className) => {
	let element = document.querySelector(`.${className}`);
	console.log(element);
	element.addEventListener("click", handleClick);

	function handleClick() {
		console.log("Clicked");
		data.style.color = className;
	}
});
