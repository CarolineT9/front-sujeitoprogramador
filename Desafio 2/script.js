// ​1) Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. 
//A função deve retornar uma string indicando o resultado.

function verfificaNumero(numero){
    if(numero === 0){
        return 'O numero é zero'
    }else if(numero > 0){
        if(numero % 2  === 0){
            return 'O número é positivo e par'
        }else{
            return 'O numero é positivo e ímpar'
        }

    }else{
        if (numero % 2 === 0){
            return 'O número é negativo e par'
        }else{
            return 'O número é negativo e ímpar'
        }
    }
}
console.log(verfificaNumero(-2))
console.log(verfificaNumero(0))
console.log(verfificaNumero(5))
// 2) Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um 
//numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números. 

function checkNum(array, numero){
    if(array.includes(numero)){
        return `O numero ${numero} está contido no array ${array}`
    }else{
        return `O número ${numero} não está contido no ${array}`
    }
}

console.log(checkNum([1,2,6,5,47,5], 50))
console.log(checkNum([1,2,6,5,47,5], 1))
console.log(checkNum([1,2,6,5,47,5], 6))
// 3) Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 e o resultado deve mostrar apenas o produto que tem o preço igual a R$20:​

const products = [
   { name: 'Maça', price: 2.5 },
   { name: 'Coca cola', price: 8 },
   { name: 'Guarana', price: 5 },
   { name: 'Chocolate', price: 20 }
 ];

// metodo find para achar o primeiro produto com preço igual a 20
const productWithPrice20 = products.find(product => product.price === 20)
if(productWithPrice20){
    console.log(`Produto com preço igual a R$ 20 é ${productWithPrice20.name}`)
}else{
    console.log('Nenhum com preço R$ 20 encontrado')
}

// ​3.1) Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8 ?

const productLessThan8 = products.find(product => product.price < 8)

if(productLessThan8){
    console.log(`Produto(s) com preço menor(es) R$8 é(são): ${productLessThan8.name}  `)
}