const prompt = require('prompt-sync')({sigint: true})
const cliente = require('../modulos/cliente.js')
const menuCliente = ()=>{

while(true){
    console.log(`
          _____________________________________
         |                                     |
         |     MENU DE CADASTRO DE CLIENTE     |
         |      1 - Adicionar Cliente          |
         |      2 - Editar Cliente             |
         |      3 - Remover Cliente            |  
         |      4 - Listar Clientes            |
         |      9 -       Sair                 |
         |_____________________________________|
         `);
         
    let inp = +prompt('')
    switch(inp){
        case 1:
        cliente.addCliente()
        break;
        case 2:
        cliente.atualizar()
        break;
        case 3:
        cliente.remove()
        break;
        case 4:
        cliente.listar()
        break;
        case 9:
        return
        default:
        console.log('Opção invalida!')
        break;
    }
    }
}
module.exports = menuCliente