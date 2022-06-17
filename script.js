let combinacoes = Number(prompt('Olá! Com quantas combinações deseja jogar? (2-7)'));
const cartas = [];
const ul = document.querySelector("ul");
let parrot1;
let parrot2;

while (combinacoes < 2 || combinacoes > 7) {
    combinacoes = Number(prompt('Não podemos iniciar o jogo com esse número de combinações. Escolha novamente! (2-7)'));
}

function tirarCartaBobRoss() {
    cartas.push(`
    <img src="images/front.png" alt="parrot">
    <img src="images/bobrossparrot.gif" alt="bobrossparrot">
   `);
    cartas.push(`
        <img src="images/front.png" alt="parrot">
        <img src="images/bobrossparrot.gif" alt="bobrossparrot">
    `);
}

function tirarCartaExplody() {
    cartas.push(`
    <img src="images/front.png" alt="parrot">
    <img src="images/explodyparrot.gif" alt="explodyparrot">
    `);
    cartas.push(`
    <img src="images/front.png" alt="parrot">
    <img src="images/explodyparrot.gif" alt="explodyparrot">
    `);
}

function tirarCartaFiesta() {
    cartas.push(`
    <img src="images/front.png" alt="parrot">
    <img src="images/Fiestaparrot.gif" alt="Fiestaparrot">
    `);
    cartas.push(`
    <img src="images/front.png" alt="parrot">
    <img src="images/Fiestaparrot.gif" alt="Fiestaparrot">
    `);
}

function tirarCartaMetal() {
    cartas.push(`
    <img src="images/front.png" alt="parrot">
    <img src="images/Metalparrot.gif" alt="Metalparrot">
    `);
    cartas.push(`
    <img src="images/front.png" alt="parrot">
    <img src="images/Metalparrot.gif" alt="Metalparrot">
    `);
}

function tirarCartaRevertit() {
    cartas.push(`
    <img src="images/front.png" alt="parrot">
    <img src="images/Revertitparrot.gif" alt="Revertitparrot">
    `);
    cartas.push(`
    <img src="images/front.png" alt="parrot">
    <img src="images/Revertitparrot.gif" alt="Revertitparrot">
    `);
}

function tirarCartaTriplets() {
    cartas.push(`
    <img src="images/front.png" alt="parrot">
    <img src="images/Tripletsparrot.gif" alt="Tripletsparrot">
    `);
    cartas.push(`
    <img src="images/front.png" alt="parrot">
    <img src="images/Tripletsparrot.gif" alt="Tripletsparrot">
    `);
}

function tirarCartaUnicorn() {
    cartas.push(`
    <img src="images/front.png" alt="parrot">
    <img src="images/Unicornparrot.gif" alt="Unicornparrot">
    `);
    cartas.push(`
    <img src="images/front.png" alt="parrot">
    <img src="images/Unicornparrot.gif" alt="Unicornparrot">
    `);
}

//troço horroroso, mas eu tava travado tentando fazer bonito
if (combinacoes === 2) {
    tirarCartaBobRoss();
    tirarCartaExplody();
} else if (combinacoes === 3) {
    tirarCartaBobRoss();
    tirarCartaExplody();
    tirarCartaFiesta();
} else if (combinacoes === 4) {
    tirarCartaBobRoss();
    tirarCartaExplody();
    tirarCartaFiesta();
    tirarCartaMetal();
} else if (combinacoes === 5) {
    tirarCartaBobRoss();
    tirarCartaExplody();
    tirarCartaFiesta();
    tirarCartaMetal();
    tirarCartaRevertit();
} else if (combinacoes === 6) {
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

for (const element of cartas) {
    ul.innerHTML += `
      <li class="card front-face" onclick="virarCarta(this)">${element}</li>
    `;
}

function virarCarta(element) {
    element.classList.toggle('front-face');
    element.classList.toggle('back-face');
    let p = 1;

    if (parrot1 == undefined) {
        parrot1 = element.innerHTML;
    } else {
        parrot2 = element.innerHTML;
        p += 1;
    }

    if (p === 2) {
        if (parrot1 != parrot2) {
            alert("errôô");
            //virando só a última carta
            //element.classList.toggle('front-face');
            //element.classList.toggle('back-face');
        } else {
            alert("acertô mizeravi");
        }
        parrot1 = undefined;
        parrot2 = undefined;
    }
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