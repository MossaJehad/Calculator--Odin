function do_op()
{
	remover()
	let number1 = parseInt(document.querySelector('#number1').value);
	let number2 = parseInt(document.querySelector('#number2').value);
	let op = document.querySelector('#op').value;
	let result = 0;
	let section = document.querySelector('section');
	if (!['+', '-', '*', '/'].includes(op))
		section.append('\nPlease enter only one of those: +, -, *, /');
	else
		result = eval(`${number1} ${op} ${number2}`);
	let resultHolder = document.createElement('div');
	resultHolder.innerText = result;
	resultHolder.classList.add('result');
	section.append(resultHolder);
}

function remover()
{
	let resultHolder = document.querySelector('div');
	if(resultHolder)
		resultHolder.remove();
}