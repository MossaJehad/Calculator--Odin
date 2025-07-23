let	array = ["AC", "/", "*", "-", 7, 8, 9, "+", 4, 5, 6, , 1, 2, 3, "=",".", 0, "+/-", ,];
var	calc = document.querySelector("#calc");

var	opArray = ["+", "-", "*", "/", "."];
let	calcBody = document.querySelector('#body');

array.forEach(value => {
let	extraClass = (value === "+" || value === "=") ? "row-span-2" : "";

let	button = document.createElement("button");
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

document.addEventListener('DOMContentLoaded', function() {
	var	buttons = document.querySelectorAll('button');
	buttons.forEach(function(btn) {
		btn.addEventListener("click", function(e) {
		if((this.value) != "AC" && (this.value) != "=" && (this.value) != "+/-")
			if(opArray.includes(this.value))
			{
				if(calc.value.charAt(calc.value.length - 1) != this.value &&
					opArray.some(num => num != calc.value.charAt(calc.value.length - 1)))
				{
						calc.value += this.value;
				}
			}
			else
				calc.value += this.value;
		else
		{
			let op = this.value;
			
		}
		console.log(calc.value.charAt(calc.value.length - 1));
		});
	});
});