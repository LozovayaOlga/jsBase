// **********************ЗАДАНИЕ 1	***********8

function Prime(number) {
	for (var i = 2; i <= number/2; i++) {
		if (number % i == 0) {
			return false;
		}
	}
	return true;
}

var count = 0;
while (count <= 100){
	if (Prime(count) == true) {
		console.log(count);
	}
	count++;
}

// **********************ЗАДАНИЕ 2	

 function even(number) {
       if (number % 2 == 0) {
           return true
       }
       return false;
   }

var count = 0;
do {
	if (count == 0){
		console.log("0 - это ноль ")
	} else if (count != 0 && even(count) == true){
		console.log(count + " - четное число ")
	} else {
		console.log(count + " - нечетное число ")
	}
	count++;
}
while (count <= 10);

// **********************ЗАДАНИЕ 3

for (var i = 0; i <= 9; console.log(i++)){
 
}

// **********************ЗАДАНИЕ 4

let line = '';
for(let i = 0; i <= 20; i++) {
	line += 'x';
	console.log(line);
}

// **********************ЗАДАНИЕ 5		

var basket = [2200, 7000, 5500];

function countBasketPrice(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum
}
console.log(countBasketPrice(basket));

