function mega(numero){
    let lista = []
    if(numero < 6 || numero > 9 ){
        console.log('Apenas numeros de 6 até 9')
        return lista = []
    }
    while(lista.length < numero){
        let randomico = Math.floor(Math.random() * 60) + 1
        lista.push(randomico)
    }

    return lista
       
    
    
}

const numeroSorteio  = mega(6)
console.log(numeroSorteio)