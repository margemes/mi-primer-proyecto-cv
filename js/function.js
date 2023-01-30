

let leerMas_btn = document.getElementById('leerMas_btn');

let hideText = document.getElementById('hideText');

leerMas_btn.addEventListener('click', toogleText);

function toogleText() {
    hideText.classList.toggle('showText');

    if (hideText.classList.contains('showText')) {
        leerMas_btn.innerHTML = 'Leer Menos';
    }
    else {
        leerMas_btn.innerHTML = 'Clic Aquí <br> para ver los enlaces';
    }
}