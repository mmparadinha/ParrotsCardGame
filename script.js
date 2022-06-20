/*MELHORIAS PENDENTES
-Array list com as imagens como variáveis, sem precisar inserir manual cada uma
-Deve ter uma forma mais limpa de fazer a distribuição das cartas do que uma cadeia de if
-Efeito 3D da carta virando
-Limpar a function da virada da carta usando mais funções menores
*/


let cartas = Number(prompt('Olá! Com quantas cartas deseja jogar? (apenas pares de 4 à 14)'));
const embaralhamento = [];
const ul = document.querySelector("ul");
let parrot1;
let parrot2;
let card1;
let card2;
let jogadas = 0;
let acertos = 0;
let tempo = 0;

while (cartas > 14) {
    cartas = Number(prompt(`Calma, fera! Com ${cartas} fica complexo demais. Escolha novamente! (vai, 14 ou menos)`));
}
while (cartas < 4) {
    cartas = Number(prompt(`Olha, com ${cartas} não dá nem pra fazer um jogo... Confia! (bora, 4 ou mais)`));
}
while (cartas%2 !==0) {
    cartas = Number(prompt(`Eita, ${cartas} não é par, cabeçudo. Tenta de novo! (só PARES amigão)`));
}

function contador() {
    tempo++;
    document.querySelector(".contador").innerHTML = `<p>Tempo</p> ${tempo}`;
}

let idInterval = setInterval(contador, 1000);

function tirarCartaBobRoss() {
    embaralhamento.push(`
<img src="images/front.png" alt="parrot">
<img src="images/bobrossparrot.gif" alt="bobrossparrot">
`);
    embaralhamento.push(`
<img src="images/front.png" alt="parrot">
<img src="images/bobrossparrot.gif" alt="bobrossparrot">
`);
}

function tirarCartaExplody() {
    embaralhamento.push(`
<img src="images/front.png" alt="parrot">
<img src="images/explodyparrot.gif" alt="explodyparrot">
`);
    embaralhamento.push(`
<img src="images/front.png" alt="parrot">
<img src="images/explodyparrot.gif" alt="explodyparrot">
`);
}

function tirarCartaFiesta() {
    embaralhamento.push(`
<img src="images/front.png" alt="parrot">
<img src="images/Fiestaparrot.gif" alt="Fiestaparrot">
`);
    embaralhamento.push(`
<img src="images/front.png" alt="parrot">
<img src="images/Fiestaparrot.gif" alt="Fiestaparrot">
`);
}

function tirarCartaMetal() {
    embaralhamento.push(`
<img src="images/front.png" alt="parrot">
<img src="images/Metalparrot.gif" alt="Metalparrot">
`);
    embaralhamento.push(`
<img src="images/front.png" alt="parrot">
<img src="images/Metalparrot.gif" alt="Metalparrot">
`);
}

function tirarCartaRevertit() {
    embaralhamento.push(`
<img src="images/front.png" alt="parrot">
<img src="images/Revertitparrot.gif" alt="Revertitparrot">
`);
    embaralhamento.push(`
<img src="images/front.png" alt="parrot">
<img src="images/Revertitparrot.gif" alt="Revertitparrot">
`);
}

function tirarCartaTriplets() {
    embaralhamento.push(`
<img src="images/front.png" alt="parrot">
<img src="images/Tripletsparrot.gif" alt="Tripletsparrot">
`);
    embaralhamento.push(`
<img src="images/front.png" alt="parrot">
<img src="images/Tripletsparrot.gif" alt="Tripletsparrot">
`);
}

function tirarCartaUnicorn() {
    embaralhamento.push(`
<img src="images/front.png" alt="parrot">
<img src="images/Unicornparrot.gif" alt="Unicornparrot">
`);
    embaralhamento.push(`
<img src="images/front.png" alt="parrot">
<img src="images/Unicornparrot.gif" alt="Unicornparrot">
`);
}

//troço horroroso, mas eu tava travado tentando fazer bonito
if (cartas === 4) {
    tirarCartaBobRoss();
    tirarCartaExplody();
} else if (cartas === 6) {
    tirarCartaBobRoss();
    tirarCartaExplody();
    tirarCartaFiesta();
} else if (cartas === 8) {
    tirarCartaBobRoss();
    tirarCartaExplody();
    tirarCartaFiesta();
    tirarCartaMetal();
} else if (cartas === 10) {
    tirarCartaBobRoss();
    tirarCartaExplody();
    tirarCartaFiesta();
    tirarCartaMetal();
    tirarCartaRevertit();
} else if (cartas === 12) {
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

embaralhamento.sort(comparador);

for (const element of embaralhamento) {
    ul.innerHTML += `
      <li onclick="virarCarta(this)">${element}</li>
    `;
}

function limpaVariáveis() {
    parrot1 = undefined;
    parrot2 = undefined;
    card1 = undefined;
    card2 = undefined;
}

function virarCarta(element) {
    if (card2 === undefined && element.classList.contains('back') == false) {
        jogadas++;
        document.querySelector(".jogadas").innerHTML = `<p>Jogadas</p> ${jogadas}`;

        element.classList.add('back');
        let p = 1;

        if (card1 === undefined) {
            card1 = element;
        } else {
            card2 = element;
        }

        if (parrot1 === undefined) {
            parrot1 = element.innerHTML;
        } else {
            parrot2 = element.innerHTML;
            p += 1;
        }

        if (p === 2) {
            if (parrot1 !== parrot2) {
                setTimeout(() => card1.classList.remove('back'), 1000);
                setTimeout(() => card2.classList.remove('back'), 1000);
            } else {
                acertos++;
                document.querySelector(".acertos").innerHTML = `<p>Acertos</p> ${acertos}`;
            }
            setTimeout(limpaVariáveis, 1100);
        }

        if (acertos === cartas/2) {
            clearInterval(idInterval);
            alert(`Você ganhou em ${tempo} segundos com ${jogadas} jogadas!`);
            let restart = prompt(`E aí, vai mais uma? (sim ou não)`);
            if (restart === "sim") {
                window.location.reload();
            }
        }
    }
}