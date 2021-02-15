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

/************************************************* 
 * Percursos de Vetor
*/

// 1) Percuso via for tradicional
//É o mais flexível, permitindo o percurso parcial (pode começar
//em um elemento que não seja o primeiro e terminar em um elemento
//que não seja o último)
for(let i = 0; i<frutas.length;i++){
    console.log(i, frutas[i])
}

console.log('=========================================')

//2) Percurso via for tradicional, em ordem inversa
for(let i = frutas.length - 1;i>=0;i--){
    console.log(i, frutas[i])
}

//3)Percurso usando for..of
//Percorre totalmente um vetor, sem necessidade manter uma variável contadora
//Varáveis:
//Fruta => nome da varável que receberá cada elemento(pode ser qqr nome válido
//de variável)
//frutas => o nome do vetor que está sendo percorrido
for(let fruta of frutas){
    console.log(fruta)
}

//4) Percurso utilizando forEach()
//forEach() recebe como argumento uma função cujo argumento
//é cada um dos elementos do vetor percorrido
//Podia ser usado qlq nome no lugar de elemento
frutas.forEach(function(elemento){
    console.log(elemento)

})

console.log("================================")

//forEach() utilizando arrow function como parâmetro
frutas.forEach(elemento => console.log(elemento))
