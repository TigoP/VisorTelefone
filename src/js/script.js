const visorTeclado = document.querySelector('input[type=tel]');
const teclado = document.querySelectorAll('input[type=button]');

for (let i = 0; i < teclado.length; i++) {
    console.log(i)
    const numero = teclado[i];
    console.log(numero)

    numero.onclick = function() {
        visorTeclado.value = visorTeclado.value + numero.value;
    }

    numero.onkeydown = function() {
        numero.classList.add('ativa');      
    }

    numero.onkeyup = function() {
        numero.classList.remove('ativa');
    }
}
