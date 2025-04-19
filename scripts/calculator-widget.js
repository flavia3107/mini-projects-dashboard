export function setCalculator() {
	const display = document.getElementById("calc-display");
	const buttons = document.querySelectorAll(".calculator .btn");

	buttons.forEach(button => {
		button.addEventListener("click", () => {
			const value = button.dataset.value;

			if (value) {
				display.value += value;
			}

			if (button.id === "clear") {
				display.value = "";
			}

			if (button.id === "equals") {
				try {
					display.value = eval(display.value);
				} catch {
					display.value = "Error";
				}
			}
		});
	});
}