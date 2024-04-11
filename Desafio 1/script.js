// ​Crie uma lista de produtos

//  A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.
//  Mostre no console quantos produtos tem nessa lista.
//  Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
//  Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.
//  Remova o segundo item da sua lista.
//  Crie uma lista de apenas numeros 1,3,5,7,0,9​

//  Ordene essa lista do menor para o maior.
//  Retire o primeiro numero desta lista.
//  Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]
// Crie uma string que contenha o dia de hoje, exemplo: 

// let hoje = '20/07/2019';

//  Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.
// Obs: Esse desafio não precisa ser entregue, mas tente fazer sem olhar no resuldo :)

const listaDeProdutos = ["Computador", "Telefone", "Mouse", "Teclado"]
//mostra a lista com MAP
listaDeProdutos.map((item) =>{
    console.log(`Produto: ${item}`)
})

//mostra quantos produtos tem na lista
console.log(`Quatidade de produtos na lista : ${listaDeProdutos.length}`)

// Retira um produto 
let tiraProduto = listaDeProdutos.filter((item) => {
    return item !== "Mouse";
});
console.log(tiraProduto);
//Busca por produto
let busca = listaDeProdutos.find(produto => produto === "Computador")
if(busca){
    console.log("o produto está na lista de produtos")
}else{
    console.log("O produto não existe!")
}
//Remove o segundo item
listaDeProdutos.splice(1,1)
console.log(listaDeProdutos)

//criando array
const numeros = [1,3,5,7,0,9]
//ordenando os numeros
let numerosOrdenados = numeros.sort()
console.log(`Números ordenados ${numeros}`)
//retirando primeiro numero
let removePrimeiroNum = numeros.shift() 
console.log(`Item removido ${removePrimeiroNum}`)
//inverte lista
let inverte = numeros.reverse()
console.log(inverte)

//Hoje
let hoje = "10/02/2024"
const  [dia, mes, ano] = hoje.split('/')
console.log(`Dia: ${dia}, Mes: ${mes}, Ano: ${ano}`)