let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTexto(elemento, texto) {
    //Asignamos un texto a un elemento HTML(etiqueta).
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    //Almacenamos en la variable numeroIngresado el valor ingresado en el input
    let numeroIngresado = parseInt(document.getElementById('numeroUsuario').value);
    //Comparamos los valores obtenidos
    if (numeroIngresado == numeroSecreto) {
        //Asignaremos un texto mencionando la cantida de intentos empleados
        //haciendo uso del operador ternario para definir la palabra 'vez' o 'veces'.
        asignarTexto('p', `Acertaste en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        //Obtenemos el elemento con id 'reiniciar' y eliminamos el atributo mediante la funcion removeAttribute.
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroIngresado < numeroSecreto) {
            asignarTexto('p', 'El numero secreto es mayor');
        } else {
            asignarTexto('p', 'El numero secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#numeroUsuario').value = '';
}

function generarNumeroSecreto() {
    //Generamos un numero aleatorio
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //verificamos si ya se generaron todos los valores posibles
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTexto('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //verificamos si el numero generado ya está en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            //si no se encuentra en la lista, lo agregamos
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function reiniciarJuego() {
    //Limpiar caja.
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego.
    //Obtenemos el elemento mediante id 'reiniciar' y le asiganmos el atributo 'disabled' con un valor 'true'.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales() {
    asignarTexto('h1', 'Juego del numero seecreto');
    asignarTexto('p', `Indique un numero del 1 - ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();
