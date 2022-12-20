function gerarNumeros(quantidade, minimo, maximo) {
    if (maximo - minimo < quantidade-1)
        return undefined

    const retorno = []
    for (let index = 0; index < quantidade; index++) {
        let numero
        do {
            numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
        } while (retorno.includes(numero));
        retorno.push(numero) 
    }
    return retorno.sort()
}

console.log(gerarNumeros(7,1,10))