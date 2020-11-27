var alumnos = {};

var persona = {}
persona.name = 'Alex';
persona.age = 21;
persona.male = true;
persona.studies = ["Bachillerato", "curso programación"];

console.log(persona);

var persona2 = {}
persona2.name = 'Justice';
persona2.age = 18;
persona2.male = true;
persona2.studies = ["ESO","curso de programación"];

console.log(persona2);

var persona3 = {}
persona3.name = 'Tony';
persona3.age = 27;
persona3.male = true;
persona3.studies = ["curso de programación"];

console.log(persona3);

var persona4 = {}
persona4.name = 'Guillem';
persona4.age = 24;
persona4.male = true;
persona4.studies = ["CFGM medios y telecomunicacion","curso de programación"];
console.log(persona4);

var persona5 = {}
persona5.name = 'Gustavo';
persona5.age = 19;
persona5.male = true;
persona5.studies = ["ESO", "curso de programación"];
console.log(persona5);

var persona6 = {}
persona6.name = 'Marc';
persona6.age = 21;
persona6.male = true;
persona6.studies = ["Eso","CFGM hosteleria"];
console.log(persona6);

alumnos = [persona, persona2, persona3, persona4, persona5, persona6];
console.log(alumnos);



alumnos.lista = function(lista){
	var t = '<table>';
	t+='<tr><th>Name</th><th>Age</th><th>Is Male?</th><th>Studies</th></tr>';
	for (var i = 0; i < lista.length; i++) {
		t+='<tr>';
			t+='<td>'+lista[i].name+'</td><td>'+lista[i].age+'</td><td>'+lista[i].male+'</td><td>'+lista[i].studies+'</td>';
		t+='</tr>';
	}

	return t+='</table>';
}


document.getElementById('container').innerHTML = alumnos.lista(alumnos);










