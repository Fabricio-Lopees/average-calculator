// Buttons
const addButton = window.document.querySelector(".add-button");
const calcButton = window.document.querySelector(".calc-button");
const clearButton = window.document.querySelector(".clear-button");

let numberList = [];

addButton.onclick = function(){
	let inputNumber = window.document.querySelector(".input-number").value;
	if(inputNumber.length == 0){
		window.alert("ERROR! There are no numbers to be added.")
	}else{
		numberList.push(Number(inputNumber));
		// Clean input
		window.document.querySelector(".input-number").value = "";
		// Add to textarea
		window.document.querySelector(".list-area").innerHTML = numberList;
	}
}

calcButton.onclick = function(){
	if(numberList.length == 0){
		window.alert("ERROR! There are no numbers to be calculated.")
	}else{
		// calculating sum
		let sum = 0;
		for(let i = 0; i < numberList.length; i++){
			sum += numberList[i];
		};

		// calculating total elements
		let totalElements = numberList.length;

		// calculating average
		let average = sum / totalElements;

		// writing in HTML
		window.document.querySelector(".sum-numbers").innerHTML = sum;
		window.document.querySelector(".total-elements").innerHTML = totalElements;
		window.document.querySelector(".result-area").innerHTML = `The average result it is ${average}`;
	}
}

clearButton.onclick = function(){
	numberList.length = 0;
	window.document.querySelector(".input-number").value = "";
	window.document.querySelector(".list-area").innerHTML = "";
	window.document.querySelector(".sum-numbers").innerHTML = "";
	window.document.querySelector(".total-elements").innerHTML = "";
	window.document.querySelector(".result-area").innerHTML = "";
}