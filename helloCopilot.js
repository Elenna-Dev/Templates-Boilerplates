// Imprime un mensaje de saludo		
const ahora = new Date();
const hora = ahora.getHours();
let saludo;

if (hora < 12) {
	saludo = "¡Buenos días";
} else if (hora < 20) {
	saludo = "¡Buenas tardes";
} else {
	saludo = "¡Buenas noches";
}

const fecha = new Intl.DateTimeFormat("es-ES", {
	day: "numeric",
	month: "long",
	year: "numeric",
}).format(ahora);

console.log(`${saludo}, Ingeniero de IA! Mi nombre es Elena. Hoy es ${fecha}.`);

function sumar(primerNumero, segundoNumero) {
	return primerNumero + segundoNumero;
}
