// **********************ЗАДАНИЕ 1	***********8

var a = 1, b = 1, c, d;
c = ++a; alert("c = " + c); // 2 , префиксый инкремент a=a+1=1+1=2 c=a=2 // теперь a=2
d = b++; alert("d = " + d); // 1, Постфиксный инкремент- вычисляетья после инструкции b=1 d=b=1, ПОСЛЕ b=b+1=1+1=2
c = (2+ ++a); alert("c = " + c); // 5, c=2+(a+1)=2+(2+1)=5 // теперь a=3
d = (2+ b++); alert("d = " + d); // 4, d=2+b=2+2=4 ПОСЛЕ b=b+1=2+1=3
alert("a = " + a); // 3
alert("b = " + b); // 3

// **********************ЗАДАНИЕ 2	
var a = 2;
var x = 1 + (a *= 2); // x=1+(a*2)=1+(2*2)=5
alert("x = " + x); // 5

// **********************ЗАДАНИЕ 3

var a = prompt("введите a"); 
var b = prompt("введите b");
var result;
if (a >= 0 && b >= 0 ){
			result = a - b ; 
			alert("a-b= " + result);
		} else if (a < 0 && b < 0) {
			result = a * b ;
			alert("a*b= " + result);
		} else if ( (a >= 0 && b < 0) || (b >= 0 && a < 0)) {
			result = parseInt(a) + parseInt(b) ;
			alert("a+b= " + result);			
		} else
					alert("вы ввели не числа");



// **********************ЗАДАНИЕ 4

var a = prompt("введите a от 1 до 15");

switch (a){
	case '1' : 
		alert('1');
		break;
	case '2': 
		alert('1,2');
		break;
	case '3': 
		alert('1,2,3');
		break;
	case '4': 
		alert('1,2,3,4');
		break;
	case '5': 
		alert('1,2,3,4,5');
		break;
	case '6': 
		alert('1,2,3,4,5,6');
		break;
	case '7': 
		alert('1,2,3,4,5,6,7');
		break;	
	case '8': 
		alert('1,2,3,4,5,6,7,8');
		break;
	case '9': 
		alert('1,2,3,4,5,6,7,8,9');
		break;	
	case '10': 
		alert('1,2,3,4,5,6,7,8,9,10');
		break;	
	case '11': 
		alert('1,2,3,4,5,6,7,8,9,10,11');
		break;	
	case '12': 
		alert('1,2,3,4,5,6,7,8,9,10,11,12');
		break;	
	case '13': 
		alert('1,2,3,4,5,6,7,8,9,10,11,12,13');
		break;	
	case '14': 
		alert('1,2,3,4,5,6,7,8,9,10,11,12,13,14');
		break;	
	case '15': 
		alert('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15');
		break;		
default : 
		alert("число не от 1 до 15");
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

var arg1= prompt("число");
var arg2= prompt("число");
var operation= prompt("операция  division multiplication minus  plus");
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
		default: alert('данные введены некорректно');
	}
 return result;
 }

alert(mathOperation(arg1, arg2, operation));

// **********************ЗАДАНИЕ 7

// Сравнить null и 0

/*
null == О false Значения null не преобразуются для сравнения ни в какие другие значения. 
*/
// **********************ЗАДАНИЕ 8	

var val= prompt("число");
var pow= prompt("число");

function power(val, pow) {
	if (pow != 1){
		return val * power(val, pow-1);
	} else
		return val;
	
}
	
alert(power(val, pow));	