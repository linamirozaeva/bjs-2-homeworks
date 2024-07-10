"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d > 0) {
		let root1 = (-b + Math.sqrt(d)) / (2 * a);
		let root2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(root1, root2);
		return arr;
	}
	if (d === 0) {
		let root0 = -b / (2 * a);
		arr.push(x0);
		return arr;
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentMonth = percent / 100 / 12;
	let creditBody = amount - contribution;
	let payment = creditBody * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
	let totalAmount = payment * countMonths;
	return +totalAmount.toFixed(2); 
  } 