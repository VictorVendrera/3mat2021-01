let frutas = ['laranja','maçã','banana','pera','uva','mamão']
//Exibir o vetor
console.log(frutas)

//Tirar o último elemento do vetor
let ultimaFruta = frutas.pop()

console.log(frutas)
console.log(ultimaFruta)

//Tirar o primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

//Removendo de posições intermediárias
//splice()
//1º parâmetro: Posição que será removida (lembre-se que a contagem começa em zero)
//2° parâmetro: Quantidade de elementos que serão removidos
let terceiraFruta= frutas.splice(2,1)//Fruta na posição 2

console.log(frutas)
console.log(terceiraFruta)// splice() sempre retorna um vetor

//inserindo um elemento no fim do vetor
frutas.push('jabuticaba')

console.log(frutas)

//Inserir um elemento no início do vetor
frutas.unshift('amora')

console.log(frutas)

//Inserindo em posição intermediária
//splice() para inserção
//1º parâmetro: a posição onde ocorrerá a inserção
//2º parâmetro: quantos elementos serão excluidos (0)
//Parâmetros seguintes: elementos a serem inseridos

//Inserindo na 4º posição
frutas.splice(3,0,'pêssego')
console.log(frutas)

//Inserindo na 3º osição
frutas.splice(2,0,'caqui','jaca')
console.log(frutas)

//Substituindo 6º fruta
frutas.splice(5,1, 'abacate')
console.log(frutas)
