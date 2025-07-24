let array = ["AC", "/", "*", "-", 7, 8, 9, "+", 4, 5, 6, 1, 2, 3, "=", ".", 0, "+/-"];
let opArray = ["+", "-", "*", "/", "."];
let calc = document.querySelector("#calc");
let calcBody = document.querySelector("#body");

array.forEach(value => {
	if (value === undefined) return; // Ignore empty slots in array

	let extraClass = (value === "+" || value === "=") ? "row-span-2" : "";

	let button = document.createElement("button");
	button.value = value;
	button.textContent = value;

	button.className = `
		${extraClass} 
		text-gray-900 bg-white border border-gray-300 focus:outline-none 
		hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium 
		rounded-full text-sm px-5 py-2.5 me-2 mb-2 
		dark:bg-gray-800 dark:text-white dark:border-gray-600 
		dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700
	`.trim();

	calcBody.appendChild(button);
});

document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll("button").forEach(function (btn) {
		btn.addEventListener("click", function () {
			let val = this.value;
			let lastChar = calc.value.charAt(calc.value.length - 1);

			if (val === "AC") {
				calc.value = "0";
				return;
			}

			if (val === "=") {
				if (!opArray.includes(lastChar)) {
					try {
						calc.value = eval(calc.value);
					} catch (err) {
						calc.value = "Error";
					}
				}
				return;
			}

			if (val === "+/-") {
				if (calc.value.startsWith("-")) {
					calc.value = calc.value.slice(1);
				} else {
					calc.value = "-" + calc.value;
				}
				return;
			}

			if (opArray.includes(val)) {
				if (calc.value !== "" && !opArray.includes(lastChar)) {
					if (val === "." && lastChar === ".") return;
					calc.value += val;
				}
				return;
			}

			if (!isNaN(val)) {
				if (calc.value === "0") {
					calc.value = val;
				} else {
					calc.value += val;
				}
				return;
			}
		});
	});
});
