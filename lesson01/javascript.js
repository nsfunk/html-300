let array = [];
//pushing inputs into empty array
$(".arrayButton").click(function() {
  array.push($(this).siblings().val());
});
//making sure that inputs have been put into array
$("#seeArray").click(function() {
  alert(array);
});
//finding if some of the values are over 5
$("#buttonSome").click(function() {
	let over5 = array.some(function(value){
    return value > 5;
	});
  alert(over5);
});
//picking up any values above 5
$("#buttonFilter").click(function() {
	let arrayFiltered = array.filter(function(value) {
  	return value > 5;
	});
  alert(arrayFiltered);
});
//adding all the inputs together
$("#buttonSum").click(function() {
	let sum = array.reduce(function(sum, value) {
  	return parseInt(sum) + parseInt(value);
	});
  alert(sum);
});
//adding 10 to each of the inputed numbers
$("#buttonMap").click(function() {
	let arrayMap = array.map(function(value) {
  	return parseInt(value) + 10;
	});
  alert(arrayMap);
});
