//Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.





// **********************ЗАДАНИЕ 1	***********

var number

// **********************ЗАДАНИЕ 3

//файл catalog.html в интернет-магазине ламп -  ПАПКА magazin


// **********************ЗАДАНИЕ 2 и 4

// объект Products со всеми  товарами
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

//addToCart добавляет товар в корзину
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

//******тест результата******
var cart = { "11111" : 1, "11114" : 2, "11113" : 1};
showCart();
