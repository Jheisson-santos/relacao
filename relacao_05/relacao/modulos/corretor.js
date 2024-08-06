const prompt = require('prompt-sync')({sigint: true})
const corretora = require('./corretora.js')

let corretores = []
let idCorretor = 1
const identificar = ()=>{
   let adicionar = idCorretor
   idCorretor++
   return adicionar
}

const validar = (input)=>{
    if(input != ''){
        return true
    }
}

const addCorretor = ()=>{
    if(corretora.listar() != false){
    let nomeCorretor = prompt('Nome do corretor? ').trim()
    let idCorretor = identificar()
    let corretoraID = parseInt(prompt('Digite o ID corretora que esta associada: '))
    if(corretoraID > 0){
    corretores.push({nomeCorretor, idCorretor, corretoraID})
    console.log(corretores);
}} else {console.log('Nenhuma corretora cadastrada');}
}
const listar = ()=>{
    if(corretores.length == 0){
       console.log(`Lista de corretores não encontrada`);
       return false
    }
    corretores.forEach(element =>{
        console.log(`Corretora: ${element.nomeCorretor}`);
})
}

let atualizar = ()=>{
    if(listar() != false){
    let id = +prompt('Digite o numero do ID: ')
    let indice = corretores.findIndex(el => el.idCorretor == id)
    if(indice != -1){
        const novo = prompt('Digite o nome atualizado: ')
        if(validar(novo)){
            corretores[indice].nomeCorretor = novo
        }
    } else {console.log('Lista de corretores não encontrada');}
   }
}

let remove = ()=>{
    let id = +prompt('Digite o id').trim()
    if(!isNaN(id) && id > 0 && id != null){
    let indice = corretores.findIndex(el => el.idCorretor == id)
    if(indice!= -1){
    corretores.splice(indice, 1)
    } else {console.log('Corretora não cadastrada');}
    } else {console.log('Invalido');}
}

module.exports = {addCorretor, listar, atualizar, remove}