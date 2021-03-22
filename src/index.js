// import style from "./style.css"

const modeSwitch = document.getElementById("toggleMode")

if (localStorage.theme === "dark") modeSwitch.checked = true

modeSwitch.addEventListener("change", function() {
	if (this.checked) {
		localStorage.theme = "dark"
	} else {
		localStorage.theme = "light"
	}

	toggleMode()
})