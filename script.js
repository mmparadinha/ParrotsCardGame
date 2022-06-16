let combinacoes = 2 * (prompt('Olá! Com quantas combinações deseja jogar? (2-7)'));
let main = document.querySelector('main');

while (combinacoes < 4 || combinacoes > 14) {
    combinacoes = 2 * (prompt('Não podemos iniciar o jogo com esse número de combinações. Escolha novamente! (2-7)'));
}

function tirarCartas() {
        main.innerHTML += `
        <div class="carta">
            <img src="images/front.png" alt="parrot">
        </div>`;
    }

for (let i = 0; i < combinacoes; i++) {
    tirarCartas();
}