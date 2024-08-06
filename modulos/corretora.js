const prompt = require('prompt-sync')({sigint: true})
let corretora = []
let idCorretora = 1
const identificar = ()=>{
   let adicionar = idCorretora
   idCorretora++
   return adicionar
}

const validar = (input)=>{
    if(input != ''){
        return true
    }
}

const addCorretora = ()=>{
    let nomeCorretora = prompt('Qual o nome da sua corretora? ').trim()
    let idCorretora = identificar()
    corretora.push({nomeCorretora, idCorretora})
    console.log(corretora);
}

const listar = ()=>{
    if(corretora.length == 0){
       console.log(`Lista não encontrada`);
       return false
    }
    corretora.forEach(element =>{
        console.log(`Corretora: ${element.nomeCorretora}\nNumero de identificador: ${element.idCorretora}`);
})
}

let atualizar = ()=>{
    if(listar() != false){
    let id = +prompt('Digite o numero do ID: ')
    let indice = corretora.findIndex(el => el.idCorretora == id)
    if(indice != -1){
        const novo = prompt('Digite o nome atualizado: ')
        if(validar(novo)){
            corretora[indice].nomeCorretora = novo
        }
    } else {console.log('Lista não encontrada');}
   }
}

let remove = ()=>{
    let id = +prompt('Digite o id').trim()
    if(!isNaN(id) && id > 0 && id != null){
    let indice = corretora.findIndex(el => el.idCorretora == id)
    if(indice!= -1){
    corretora.splice(indice, 1)
    } else {console.log('Corretora não cadastrada');}
    } else {console.log('Invalido');}
}

module.exports = {addCorretora, listar, atualizar, remove}