// 10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.

// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//     valorCustoTotal = valorCusto + impostoSobreOCusto
//     lucro = valorVenda - valorCustoTotal (lucro de um produto)

let buyProduct = 100
let sellProduct = 500

totalCost = ((buyProduct * 0.2) + buyProduct)
sellProfit = sellProduct - totalCost

    if (buyProduct < 0){
        console.log('Error - buyProduct < 0');
    } else if (sellProduct < 0){
        console.log('Error - sellProduct < 0');
    } else if (sellProfit < 0){
        console.log('Error - sellProfit < 0');
    } else {
        console.log(sellProfit)
    }

// console.log(totalCost)
// console.log(sellProfit)