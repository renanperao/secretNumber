alert('Bem vindo, ao jogo do numero secreto');

let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log('Valor do numero secreto', numeroSecreto);
let chute
let tentativas = 1;
console.log(chute);
console.log('Comparação chute e número secreto:', chute == numeroSecreto);


//enquanto nao acertar
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se o chute for igual:
    if (chute == numeroSecreto) {
        break;
     } else {
         if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute} `);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
     alert(`Isso ai, você descobriu o número secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativa}.`);






