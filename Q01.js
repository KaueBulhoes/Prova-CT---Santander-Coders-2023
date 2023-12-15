let produto = 1;
let fator = 3;

while (fator <= 10) {
    produto *= fator;
    fator += 2;
}

console.log(produto)

/*Q01 - C
O código irá multiplicar "produto" por "fator" e depois "fator" irá aumentar em 2, continuando o loop até "fator" ser igual ou menor 10.
Como fator começa em 3 e é acrescido 2, haverá apenas 4 iterações, finalizando com "fator" = 9 e "produto" = 945 */