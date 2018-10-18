// **********************ЗАДАНИЕ 1	***********8

var a = 1, b = 1, c, d;
c = ++a; console.log("c = " + c); // 2 , префиксый инкремент a=a+1=1+1=2 c=a=2 // теперь a=2
d = b++; console.log("d = " + d); // 1, Постфиксный инкремент- вычисляетья после инструкции b=1 d=b=1, ПОСЛЕ b=b+1=1+1=2
c = (2+ ++a); console.log("c = " + c); // 5, c=2+(a+1)=2+(2+1)=5 // теперь a=3
d = (2+ b++); console.log("d = " + d); // 4, d=2+b=2+2=4 ПОСЛЕ b=b+1=2+1=3
console.log("a = " + a); // 3
console.log("b = " + b); // 3

// **********************ЗАДАНИЕ 2	
var a = 2;
var x = 1 + (a *= 2); // x=1+(a*2)=1+(2*2)=5
console.log("x = " + x); // 5

// **********************ЗАДАНИЕ 3

var a = 15; 
var b = 15;
var result;
if (a >= 0 && b >= 0 ){
			result = a - b ; 
			console.log("a-b= " + result);
		} else if (a < 0 && b < 0) {
			result = a * b ;
			console.log("a*b= " + result);
		} else if ( (a >= 0 && b < 0) || (b >= 0 && a < 0)) {
			result = parseInt(a) + parseInt(b) ;
			console.log("a+b= " + result);			
		} else
					console.log("вы ввели не числа");



// **********************ЗАДАНИЕ 4

var a = 8;

switch (a){
	case '1' : 
		console.log('1');	
	case '2': 
		console.log('2');	
	case '3': 
		console.log('3');
	case '4': 
		console.log('4');
	case '5': 
		console.log('5');
	case '6': 
		console.log('6');	
	case '7': 
		console.log('7');
	case '8': 
		console.log('8');
	case '9': 
		console.log('9');
	case '10': 
		console.log('10');	
	case '11': 
		console.log('11');
	case '12': 
		console.log('12');
	case '13': 
		console.log('13');
	case '14': 
		console.log('14');
	case '15': 
		console.log('15');
default : 
		console.log("число не от 1 до 15");
}
// **********************ЗАДАНИЕ 5		
var a ;
var b ;

function plus (a,b) {
	return parseInt(a)+parseInt(b);
}


function minus (a,b) {
	return a-b;
}


function multiplication (a,b) {
	return a*b;
}


function division (a,b) {
	return a/b;
}

// **********************ЗАДАНИЕ 6

var arg1 = -7;
var arg2 = 8;
var operation = division;//("операция  division multiplication minus  plus");
var result;
 function mathOperation(arg1, arg2, operation){
	switch(operation) {
		case 'plus':
		result = plus(arg1, arg2);
		break;
		case 'minus':
		result = minus (arg1, arg2);
		break;	
		case 'division':
		result = division (arg1, arg2);
		break;
		case 'multiplication':
		result = multiplication (arg1, arg2);
		break;
		default: console.log('данные введены некорректно');
	}
 return result;
 }

console.log(mathOperation(arg1, arg2, operation));

// **********************ЗАДАНИЕ 7

// Сравнить null и 0

/*
null == О false Значения null не преобразуются для сравнения ни в какие другие значения. 
*/
// **********************ЗАДАНИЕ 8	

var val = 2;
var pow = -3;

function power(val, pow) {
	if(pow == 0) {
		return 1;
	}
	if(pow < 0) {
		return power(1 / val, -pow);
	}
	if (pow != 1){
		return val * power(val, --pow);
	} else
		return val;
	
}
	
console.log(power(val, pow));	
