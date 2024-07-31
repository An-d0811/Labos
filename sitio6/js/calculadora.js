// Función para realizar las operaciones
function calcular(operador, num1, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error: División por cero';
            }
            return num1 / num2;
        default:
            return 'Operador no válido';
    }
}

// Función principal para interactuar con el usuario
function iniciarCalculadora() {
    let continuar = true;
    let resultados = [];
    while (continuar) {
        let operador = prompt('Ingrese el operador (+, -, *, /):');
        if (operador === null) break; // Salir si el usuario cancela

        let num1 = prompt('Ingrese el primer número:');
        if (num1 === null) break; // Salir si el usuario cancela
        num1 = parseFloat(num1);

        let num2 = prompt('Ingrese el segundo número:');
        if (num2 === null) break; // Salir si el usuario cancela
        num2 = parseFloat(num2);

        let resultado = calcular(operador, num1, num2);
        console.log(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);
        alert(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);

        // Agregar el resultado a la lista de resultados
        resultados.push(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);

        // Mostrar todos los resultados acumulados en el HTML
        document.getElementById('resultado').innerHTML = resultados.join('<br>');

        // Preguntar al usuario si desea realizar otra operación
        continuar = confirm('¿Desea realizar otra operación?');
    }
}

// Iniciar la calculadora
iniciarCalculadora();
