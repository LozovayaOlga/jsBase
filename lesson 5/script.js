 var letters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ' '];

var table = document.createElement("table");
for (var i = 1; i < 9; i++) {
    var tr = document.createElement('tr');
	    tr.innerHTML = letters[i];
			tr.style.color = "red";
    for (var j = 1; j < 9; j++) {
        var td = document.createElement('td');
			  td.innerHTML = j;
			  td.style.color = "red";
        if (i%2 == j%2) {
            td.className = "white";

        } else {
            td.className = "black";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);

