let firstName = document.querySelector('.first-name')
let secondName = document.querySelector('.second-name')
let firstNameArray = firstName.textContent.split('')
let secondNameArray = secondName.textContent.split('')
firstName.textContent = ''
secondName.textContent = ''

function efeitoDigitalizarSegundoNome(){
    for (let posicaoLetraSegundoNome = 0; posicaoLetraSegundoNome < secondNameArray.length; posicaoLetraSegundoNome++) {
        setTimeout(function() {
            console.log(secondName.textContent += secondNameArray[posicaoLetraSegundoNome])
        }, 150 * posicaoLetraSegundoNome)
    }
}

for (let posicaoLetraPrimeiroNome = 0; posicaoLetraPrimeiroNome < firstNameArray.length; posicaoLetraPrimeiroNome++) {
    setTimeout(function efeitoDigitalizarPrimeiroNome() {
        console.log(firstName.textContent += firstNameArray[posicaoLetraPrimeiroNome])
        if(posicaoLetraPrimeiroNome == firstNameArray.length - 1){
            efeitoDigitalizarSegundoNome()
        }
    }, 150 * posicaoLetraPrimeiroNome)
    194915
}
