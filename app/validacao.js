function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Numero invalido</div>`
        return
    }

    if (ChuteForaDoIntervalo(numero)){
        elementoChute.innerHTML += `
        <div>O numero precisa ser maior que ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>o número secreto é menor <i class="fa-solid fa-circle-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>o número secreto é maior <i class="fa-solid fa-circle-up"></i></div>
        `
    }
}

function chuteForInvalido (numero) {
    return Number.isNaN(numero)
}

function ChuteForaDoIntervalo(numero) {
    return numero > maiorValor || numero < menorValor
}
