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

//var num1 = prompt("Ingrese el lado de un cuadrado", "")
// var num2 = prompt("Ingrese el 2° numero", "")

// document.write("El area del cuadrado es: " + area_cuadrado(parseInt(num1)) + "<br>")
// document.write("El perimetro del cuadrado es: " + perimetro_cuadrado(parseInt(num1)) + "<br>")


// function area_cuadrado(a){
// 	return a*a
// }

// function perimetro_cuadrado(a){
// 	return 4*a
// }

// function area_rectangulo(a){
// 	return a*b
// }

// function perimetro_rectangulo(a){
// 	return 2*a+2*b
// }

// var resultado = parseInt(num1) + parseInt(num2)
// document.write("El resultado es: " + (parseInt(num1)+parseInt(num2)))

// sumar(parseInt(num1), parseInt(num2));
// multiplicar(parseInt(num1), parseInt(num2));
// restar(parseInt(num1), parseInt(num2));
// dividir(parseInt(num1), parseInt(num2));
// resto(parseInt(num1), parseInt(num2));

// document.write("resultado: " + (sumar(parseInt(num1), parseInt(num2)) * dividir(parseInt(num1), parseInt(num2))))


// // function sumar(a, b){
// // 	document.write("El resultado de la suma es: " + (a + b) + "<br>")
// // }

// function sumar(a, b){
// 	return a+b
// }

// function restar(a, b){
// 	document.write("El resultado de la resta es: " + (a - b) + "<br>")
// }

// function multiplicar(a, b){
// 	document.write("El resultado de la multiplicacion es: " + (a * b) + "<br>")
// }

// // function dividir(a, b){
// // 	if (b != 0){
// // 		document.write("El resultado de la division es: " + (a / b).toFixed(3) + "<br>")
// // 	} else {
// // 		document.write("El resultado de la division es: ERROR DIVISION POR 0 <br>")
// // 	}
// // }

// function dividir(a, b){
// 	if (b != 0){
// 		return (a / b).toFixed(3)
// 	} else {
// 		return 1
// 	}
// }

// function resto(a, b){
// 	if (b != 0){
// 		document.write("El resultado del resto de la division es: " + (a % b) + "<br>")
// 	} else {
// 		document.write("El resultado de la division es: ERROR DIVISION POR 0 <br>")
// 	}
// }



// Arreglos

// var frutas = ["Manzana", "Pera", "Sandia", "Cereza", "Naranja", "Platano", "Mango", "Chirimoya", "Papaya"]

// document.write("La cantidad de elementos del arreglo son: "+ frutas.length + "<br>")

// // document.write("La fruta "+ frutas[0] + " es deliciosa" + "<br>")
// // document.write("La fruta "+ frutas[1] + " es deliciosa" + "<br>")
// // document.write("La fruta "+ frutas[2] + " es deliciosa" + "<br>")
// // document.write("La fruta "+ frutas[3] + " es deliciosa" + "<br>")


// for(i=0; i<frutas.length; i++){
// 	document.write("La fruta "+ frutas[i] + " es deliciosa" + "<br>")
// }



// SWITCH

var figura = prompt("Ingrese figura geometrica","")
const PI = 3.141592653589793

switch (figura){
	case 'cuadrado':
		let lado = prompt("Ingrese el lado del cuadrado","")
		document.write("El perimetro del cuadrado es: " + perimetro_cuadrado(parseInt(lado)) + "<br>")
		document.write("El area del cuadrado es: " + area_cuadrado(parseInt(lado)) + "<br>")
	break;

	case 'rectangulo':
		let ladoa = prompt("Ingrese el lado a del rectangulo","")
		let ladob = prompt("Ingrese el lado b del rectangulo","")

		document.write("El perimetro del rectangulo es: " + perimetro_rectangulo(parseInt(ladoa), parseInt(ladob)) + "<br>")
		document.write("El area del rectangulo es: " + area_rectangulo(parseInt(ladoa), parseInt(ladob)) + "<br>")		
	break;

	case 'circulo':
		let radio = prompt("Ingrese el radio del circulo", "")
		document.write("El perimetro del circulo es: " + perimetro_circulo(parseInt(radio)).toFixed(2) + "<br>")
		document.write("El area del circulo es: " + area_circulo(parseInt(radio)).toFixed(2) + "<br>")	
	break;

	case 'triangulo':
		let base = prompt("Ingrese la base del triangulo", "")
		let altura = prompt("Ingrese la base del triangulo", "")

		document.write("El area del triangulo es: " + area_triangulo(parseInt(base), parseInt(altura)) + "<br>")
	break;
}

function perimetro_cuadrado(a){
	return 4 * a
}

function area_cuadrado(a){
	return a * a
}

function perimetro_rectangulo(a, b){
	return 2 * a + 2 * b
}

function area_rectangulo(a, b){
	return a * b
}

function perimetro_circulo(r){
	// return 2 * PI * r
	return 2 * Math.PI * r
}

function area_circulo(r){
	// return PI * (r*r)
	return Math.PI * Math.pow(r, 2)
}

function area_triangulo(b, h){
	return (b * h) / 2
}