// Mostrar informacion

// alert('Mostrando desde Alert: Bienvenido a nuestro sitio web')
// console.log('Mostrando desde Consola: Bienvenido a nuestro sitio web')
// document.write('Mostrando desde Cuerpo de Pagina: Bienvenido a nuestro sitio web')

// Solicitar al usuario ingresar informacion

// var nombre = prompt("Ingrese su nombre", "")
// var apellido = prompt("Ingrese su apellido", "")

// document.write("Hola " + nombre + " " + apellido + ", bienvenido a nuestro sitio web")
// alert("Hola " + nombre + " " + apellido + ", bienvenido a nuestro sitio web")
// console.log("Hola " + nombre + " " + apellido + ", bienvenido a nuestro sitio web")

var num1 = prompt("Ingrese el 1° numero", "")
var num2 = prompt("Ingrese el 2° numero", "")

// var resultado = parseInt(num1) + parseInt(num2)
// document.write("El resultado es: " + (parseInt(num1)+parseInt(num2)))

sumar(parseInt(num1), parseInt(num2));
multiplicar(parseInt(num1), parseInt(num2));
restar(parseInt(num1), parseInt(num2));
dividir(parseInt(num1), parseInt(num2));
resto(parseInt(num1), parseInt(num2));

function sumar(a, b){
	document.write("El resultado de la suma es: " + (a + b) + "<br>")
}

function restar(a, b){
	document.write("El resultado de la resta es: " + (a - b) + "<br>")
}

function multiplicar(a, b){
	document.write("El resultado de la multiplicacion es: " + (a * b) + "<br>")
}

function dividir(a, b){

	if (b != 0){
		document.write("El resultado de la division es: " + (a / b).toFixed(3) + "<br>")
	} else {
		document.write("El resultado de la division es: ERROR DIVISION POR 0 <br>")
	}
}

function resto(a, b){
	if (b != 0){
		document.write("El resultado del resto de la division es: " + (a % b) + "<br>")
	} else {
		document.write("El resultado de la division es: ERROR DIVISION POR 0 <br>")
	}
}