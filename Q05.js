/*Desenvolva uma função somaImpares que recebe um array de números inteiros e retorna a resultado de todos os números ímpares no array.*/

let listaNumeros = [1, 2, 3, 4, 5, 6];

function somaImpares(listaNumeros) {
    let resultado = 0;

    listaNumeros.forEach(numero => { //função para entrar em cada item da lista
        if (numero % 2 !== 0) { //check para os números impares
            resultado += numero;
        }
    });

    return resultado;
}

let resultado = somaImpares(listaNumeros);
console.log(resultado);