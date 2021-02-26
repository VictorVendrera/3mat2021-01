function buscaSequencial(vetor, valorBusca){
     for(let i = 0; i < vetor.length; i++){
        
        // Em vez de fazer a comparção dentro da função de bisca,
        // "Terceirizamos" essa comparação chamando uma furnção externa
        if(fnComp(vetor[i], valorBusca)) return i // retorna a posição onde foi encontrado    
    }
     return -1 // Valor de busca não encontrado
 }

 /*function comparaNome(objNome, valorBusca){
     return objNome.fisrt_name === valorBusca
 }*/

 const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

 import {objNomes} from './includes/vetor-obj-nomes.mjs'

 console.log(buscaSequencial(objNomes, 'Fausto', comparaNome))