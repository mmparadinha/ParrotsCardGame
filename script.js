let combinacoes = prompt('Olá! Com quantas combinações deseja jogar? (2-7)');
let main = document.querySelector('main');
const cartas = [];

while (combinacoes < 2 || combinacoes > 7) {
    combinacoes = prompt('Não podemos iniciar o jogo com esse número de combinações. Escolha novamente! (2-7)');
}

function tirarCartaBobRoss() {
    main.innerHTML = cartas;
    cartas.push(`
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/bobrossparrot.gif" alt="bobrossparrot">
    </div>
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/bobrossparrot.gif" alt="bobrossparrot">
    </div>`)
}

/*function tirarCartaBobRoss() {
    main.innerHTML += `
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/bobrossparrot.gif" alt="bobrossparrot">
    </div>
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/bobrossparrot.gif" alt="bobrossparrot">
    </div>`;
}*/

function tirarCartaExplody() {
    main.innerHTML += `
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/explodyparrot.gif" alt="explodyparrot">
    </div>
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/explodyparrot.gif" alt="explodyparrot">
    </div>`;
}

function tirarCartaFiesta() {
    main.innerHTML += `
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/Fiestaparrot.gif" alt="Fiestaparrot">
    </div>
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/Fiestaparrot.gif" alt="Fiestaparrot">
    </div>`;
}

function tirarCartaMetal() {
    main.innerHTML += `
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/Metalparrot.gif" alt="Metalparrot">
    </div>
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/Metalparrot.gif" alt="Metalparrot">
    </div>`;
}

function tirarCartaRevertit() {
    main.innerHTML += `
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/Revertitparrot.gif" alt="Revertitparrot">
    </div>
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/Revertitparrot.gif" alt="Revertitparrot">
    </div>`;
}

function tirarCartaTriplets() {
    main.innerHTML += `
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/Tripletsparrot.gif" alt="Tripletsparrot">
    </div>
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/Tripletsparrot.gif" alt="Tripletsparrot">
    </div>`;
}

function tirarCartaUnicorn() {
    main.innerHTML += `
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/Unicornparrot.gif" alt="Unicornparrot">
    </div>
    <div class="card front-face" onclick="virarCarta(this)">
        <img src="images/front.png" alt="parrot">
        <img src="images/Unicornparrot.gif" alt="Unicornparrot">
    </div>`;
}

//troço horroroso, mas eu tava travado tentando fazer bonito
if (combinacoes == 2) {
        tirarCartaBobRoss();
        tirarCartaExplody();
    } else if (combinacoes == 3) {
            tirarCartaBobRoss();
            tirarCartaExplody();
            tirarCartaFiesta();
        } else if (combinacoes == 4) {
                tirarCartaBobRoss();
                tirarCartaExplody();
                tirarCartaFiesta();
                tirarCartaMetal();
            } else if (combinacoes == 5) {
                    tirarCartaBobRoss();
                    tirarCartaExplody();
                    tirarCartaFiesta();
                    tirarCartaMetal();
                    tirarCartaRevertit();
                } else if (combinacoes == 6) {
                        tirarCartaBobRoss();
                        tirarCartaExplody();
                        tirarCartaFiesta();
                        tirarCartaMetal();
                        tirarCartaRevertit();
                        tirarCartaTriplets();
                    } else {
                        tirarCartaBobRoss();
                        tirarCartaExplody();
                        tirarCartaFiesta();
                        tirarCartaMetal();
                        tirarCartaRevertit();
                        tirarCartaTriplets();
                        tirarCartaUnicorn();
                    }

function comparador() {
    return Math.random() - 0.5;
}

cartas.sort(comparador);

function virarCarta(element) {
    element.classList.toggle('front-face');
    element.classList.toggle('back-face');
}





//ESSA PARTE AQUI É PRA TENTAR VIRAR A CARTA BONITIN
/*function tirarCarta() {
    main.innerHTML += `
    <div class="card" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="images/front.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src="images/bobrossparrot.gif" alt="bobrossparrot">
        </div>
    </div>`;
}

function virarCarta(element) {
    element.classList.add('back-face');
}*/