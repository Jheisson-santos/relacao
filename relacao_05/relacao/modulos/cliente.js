const prompt = require('prompt-sync')({sigint: true})
let cliente = []
let idCliente = 1
const identificar = ()=>{
   let adicionar = idCliente
   idCliente++
   return adicionar
}

const validar = (input)=>{
    if(input != ''){
        return true
    }
}

const addCliente = ()=>{
    let nomeCliente = prompt('Qual o seu nome? ').trim()
    let idCliente = identificar()
    cliente.push({nomeCliente, idCliente})
    console.log(cliente);
}

const listar = ()=>{
    if(cliente.length == 0){
       console.log(`Lista não encontrada`);
       return false
    }
    cliente.forEach(element =>{
        console.log(`Corretora: ${element.nomeCliente}`);
})
}

let atualizar = ()=>{
    if(listar() != false){
    let id = +prompt('Digite o numero do ID: ')
    let indice = cliente.findIndex(el => el.idCliente == id)
    if(indice != -1){
        const novo = prompt('Digite o nome atualizado: ')
        if(validar(novo)){
            cliente[indice].nomeCliente = novo
        }
    } else {console.log('Lista não encontrada');}
   }
}

let remove = ()=>{
    let id = +prompt('Digite o id').trim()
    if(!isNaN(id) && id > 0 && id != null){
    let indice = cliente.findIndex(el => el.idCliente == id)
    if(indice!= -1){
    cliente.splice(indice, 1)
    } else {console.log('Usuario não cadastrada');}
    } else {console.log('Invalido');}
}

module.exports = {addCliente, listar, atualizar, remove}
