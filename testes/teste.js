let primeiroNome = 'Rivelino'
let primeiroNomeArray = primeiroNome.split('')
let segundoNome = 'Rodrigues'
let segundoNomeArray = segundoNome.split('')
let guardar_nome = ''



function chamar(){
    for (let posicaoSegundoNome = 0; posicaoSegundoNome < segundoNomeArray.length; posicaoSegundoNome++){
        setTimeout(function digitarPrimeiroNome() {
            guardar_nome += segundoNomeArray[posicaoSegundoNome]
    }, 100 * posicaoSegundoNome)
    }
}

for (let posicaoPrimeiroNome = 0; posicaoPrimeiroNome < primeiroNomeArray.length; posicaoPrimeiroNome++){
    setTimeout(function digitarPrimeiroNome() {
        guardar_nome += primeiroNomeArray[posicaoPrimeiroNome]
        // if(posicaoPrimeiroNome == primeiroNomeArray.length){
        //     chamar()
        // }
}, 100 * posicaoPrimeiroNome)
}

