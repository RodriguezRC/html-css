let sobreMimTitulo = document.querySelector('.my-name-h1')
let textoQuebrado = sobreMimTitulo.textContent.split('')
sobreMimTitulo.textContent = ''

for(let i = 0; i < textoQuebrado.length; i++){
    setTimeout(function efeitoDigitalizar () {
    console.log(sobreMimTitulo.textContent += textoQuebrado[i])
    }, 75 * i)
}

