
// **********************ЗАДАНИЕ 1	***********

/* 
let number = parseInt(prompt('Введите число от 0 до 999:', ''));

while (isNaN(number) || number < 0 || number > 999) {
    alert("Вы ввели некорректные данные. Нам нужно число от 0 до 999");
    number = parseInt(prompt('Введите число от 0 до 999:', ''));
}
function getObjectFromNumber(number) {
    let object = {};

    object["единицы"] = number % 10;
    object["десятки"] = Math.floor(number / 10) % 10;
    object["сотни"] = Math.floor(number / 100) % 10;

    return object;
}
console.log(getObjectFromNumber(number));
*/
function NumberObject(number) {
	
	var str = String(number); //преобразуем число в строковый тип
	var simpleNumber = str.split(''); // число разбиваем в массив на простые числа
	var simpleNumberRevers = simpleNumber.reverse(); //записываем массив в обратном порядке
	var objNumber = {}; // объект с единицами стонями и десятками
	
	if (simpleNumber.length = 3) {
			objNumber['сотни'] = +simpleNumber[2]; 
			objNumber['десятки'] = +simpleNumber[1]; 
			objNumber['единицы'] = +simpleNumber[0]; 
			return objNumber; 	
	} else {
		console.log('число больше 999'); 
		return null;
	}
}

console.log(NumberObject(25)); 

// **********************ЗАДАНИЕ 3

//файл catalog.html в интернет-магазине ламп -  ПАПКА magazin


// **********************ЗАДАНИЕ 2 и 4

//объект Products со всеми  товарами (по номеру товара ) 
var Products = {
	"11111" : {
    "name" : "Настольная лампа Nowodvorski Loft Taupe",
    "price" : 6058,
    "description" : "Общая мощность 60w. цоколь e27. В осветительном приборе используются металлические плафоны серого цвета конусной формы. Габаритные размеры: высота 480 мм, диаметр&nbsp;240 мм",
    "image" : "magazin/img/product_1/product_1_black_small.jpg"
  },
	"11112" : {
    "name" : "Настольная лампа Eurosvet",
    "cost" : 2043,
    "description" : "Настольная лампа eurosvet прекрасно подойдет для любого помещения. Габаритные размеры : высота 660&nbsp;мм, ширина 180 мм, длина 180 мм.",
    "image" : "img/product_2/product_2_green_small.jpg"
  },
	"11113" : {
    "name" : "Настольная лампа Lightstar Vortico ",
    "price" : 3498,
    "description" : "Общая мощность 40w. цоколь G9. В осветительном приборе используются стеклянные плафоны белого цвета конусной формы. Габаритные размеры : высота 440 мм, диаметр 130 мм.",
    "image" : "magazin/img/product_3/product_3_braun_small.jpg"
  },
	"11114" : {
    "name" : "Спот Lighting Relax Junior 4",
    "price" : 7085,
    "description" : "Общая мощность 40w. цоколь G9. В осветительном приборе используются стеклянные плафоны белого цвета конусной формы. Габаритные размеры : высота 440 мм, диаметр 130 мм.",
    "image" : "magazin/img/product_4/product4_small.jpeg"
  },
	"11115" : {
    "name" : "Потолочная люстра Lightstar Vortico",
    "price" : 16900,
    "description" : "Общая мощность&nbsp;40w. цоколь G9. В осветительном приборе используются стеклянные плафоны белого цвета конусной формы. Габаритные размеры : высота 440 мм, диаметр 130 мм.",
    "image" : "magazin/img/product_6/product_6_small.jpg"
  },
	"11116" : {
    "name" : "Потолочная люстра Reccagni Angelo PL ",
    "price" : 8500,
    "description" : "Габаритные размеры&nbsp;: высота 660 мм, ширина 180 мм, длина 180 мм.",
    "image" : "magazin/img/product_7/product_7_small.jpg"
  }
}

var cart = {}; //моя корзина

// добавляет товар в корзину
function addToCart() {
	// атрибут с номером data-id, прописан в тэге с кнопкой "Добавить в корзину"
	var id = this.getAttribute('data-id'); 

	// проверка есть ли уже такой товар
	if (cart[id] != undefined) {
		cart[id]++;
	}
	else {
		cart[id] = 1;
	}
}

// ПОЛУЧИТЬСЯ например cart = { "11111" : 1, "11114" : 2, "11113" : 1};


// вывод номера товара, его количества на страницу html и СЧИТАЕМ сумму
function showCart() {
		var sum = 0;
		var out = '';
		for (var key in cart) {
			if (cart.hasOwnProperty(key)) {
					out += 'Номер ' + key + ' -  ' + cart[key] + ' шт.' + '<br>';
					out += '<img src="'+Products[key].image+'" width="110" height="110">' + '<br>';
					out += Products[key].name + '<br>';
					out += cart[key]*Products[key].price + ' руб.' + '<br>';
					out += '<br>';
					document.getElementById("my-cart").innerHTML = out;
					sum += cart[key]*Products[key].price;     
			} else 			
					document.getElementById("my-cart").innerHTML = "вы ничего не выбрали";
			}

		document.getElementById("my-cost").innerHTML = "Cумма вашей покупки " + sum;
}

//******ТЕСТ результата******
var cart = { "11111" : 1, "11114" : 2, "11113" : 1};
showCart();



/*
Продолжаем работу с нашим интернет-магазином 2.1. В прошлом ДЗ Вы реализовали корзину на базе массивов. Какими объектами можно заменить элементы данных массивов? 2.2. Реализуйте такие объекты 2.3. Перенесите функционал подсчета корзины на объектно-ориентированную базу
*/

var objBasket = {
    arrGoods: new Array(),
    checkGoodInBasket: function(iId) {
        for (let iElem in this.arrGoods) {
            if (this.arrGoods[iElem].id == iId) {
                return iElem;
            }
        }
    },
    addGoodToBasket: function(iId, sName, iCount, fPrice) {
        if (iCount != 0) {
            if (this.checkGoodInBasket(iId) == undefined) {
                this.arrGoods[this.arrGoods.length] = {
                    id: iId, //ид товара
                    name: sName, //назнание товара
                    count: iCount, //кол-во товара
                    price: fPrice //
                }    
            } else {
                this.arrGoods[this.checkGoodInBasket(iId)].count += iCount; 
            }
        } 
    },
    deleteGoodFromBasket: function(iId, iCount) {
        let iElem = this.checkGoodInBasket(iId);
        
        if ((this.arrGoods[iElem].id == iId) && (this.arrGoods[iElem].count <= iCount)) {
            this.arrGoods.splice(iElem,1);
        } else if ((this.arrGoods[iElem].id == iId) && (this.arrGoods[iElem].count > iCount)) {
            this.arrGoods[iElem].count -= iCount;
        }
    },
    countGoodsInBasket: function() {
        let iCountGoods = 0;
        
        for (let iElem in this.arrGoods) {
            iCountGoods += this.arrGoods[iElem].count; 
        }
        
        return iCountGoods;    
    },
    fullPriceInBasket: function() {
        let fFullPrice = 0;
        
        for (let iElem in this.arrGoods) {
            fFullPrice += this.arrGoods[iElem].count * this.arrGoods[iElem].price; 
        }
        
        return fFullPrice;    
    }
};

//Добавляем в корзину товары
objBasket.addGoodToBasket(122, "Beer", 1, 10.5);
objBasket.addGoodToBasket(123, "Vodka", 10, 9.5);
objBasket.addGoodToBasket(124, "Sidr", 3, 8.5);
objBasket.addGoodToBasket(125, "Ele", 25, 7.5);

//Ой нет, больше сидра!
objBasket.addGoodToBasket(124, "Sidr", 7, 8.5);

//Удаляем товар из корзины
//Давайте без водки
objBasket.deleteGoodFromBasket(123, 10);
//Давайте поменьше эля
objBasket.deleteGoodFromBasket(125, 20);

console.log("**********КОРЗИНА!**********");
console.log(objBasket);
console.log("В корзине " + objBasket.arrGoods.length + " вида товара. Общее кол-во товара: " + objBasket.countGoodsInBasket() + " на сумму: " + objBasket.fullPriceInBasket());

