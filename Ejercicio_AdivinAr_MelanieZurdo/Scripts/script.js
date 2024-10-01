let mensajes = document.getElementById('mensajes')
let num_usuario = document.getElementById('ingresonumero')
let btn_reiniciar = document.getElementById('reiniciar')
let gif = document.getElementById('gif')
let num_aleatorio

console.log(num_usuario.value)

function generarNumeroAleatorio() {

    num_aleatorio = Math.floor(Math.random() * 10) + 1;

    console.log(num_aleatorio)

}

function enviarNumero() {



    if ((num_usuario.value < 1 || num_usuario.value > 10) & num_usuario.value != "") {

        mensajes.innerText = "¡Error!, El numero ingresado debe estar entre 1 y 10"
        mensajes.classList.add('errormensaje')
    }

    else {

        if (num_usuario.value == num_aleatorio) {

            mensajes.classList.add('mensajecorrecto')

            mensajes.innerText = `¡Adivinaste!, el numero que habia pensado es ${num_aleatorio}`

            btn_reiniciar.classList.add('elementovisible')

            gif.classList.add('elementovisible')


        }

        else if (num_usuario.value < num_aleatorio & num_usuario.value != "") {

            mensajes.classList.remove('errormensaje')

            mensajes.innerText = "Mmmm, creo que deberias probar un numero mayor "
        }

        else if (num_usuario.value > num_aleatorio & num_usuario.value != "") {

            mensajes.classList.remove('errormensaje')

            mensajes.innerText = "Mmmm, creo que deberias probar un numero menor"
        }

        else {

            mensajes.innerText = "¡Error!, no has ingresado ningun numero"

            mensajes.classList.add('errormensaje')
        }
    }
}

function reiniciarJuego() {

    num_aleatorio = Math.floor(Math.random() * 10) + 1;

    btn_reiniciar.classList.remove('elementovisible')

    gif.classList.remove('elementovisible')

    mensajes.classList.remove('mensajecorrecto')

    mensajes.classList.remove('errormensaje')

    num_usuario.value = ''

    mensajes.innerText = "A jugar!"

    console.log(num_aleatorio)


}

