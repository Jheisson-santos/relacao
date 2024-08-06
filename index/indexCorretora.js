const prompt = require('prompt-sync')({sigint: true})
const corretora = require('../modulos/corretora.js')
const menuCorretora = ()=>{

while(true){
    console.log(`
          _____________________________________
         |                                     |
         |     MENU DE CADASTRO DE CORRETORA   |
         |      1 - Adicionar corretora        |
         |      2 - Editar corretora           |
         |      3 - Remover corretora          |  
         |      4 - Listar corretoras          |
         |      9 -       Sair                 |
         |_____________________________________|
         `);
         
    let inp = +prompt('')
    switch(inp){
        case 1:
        corretora.addCorretora()
        break;
        case 2:
        corretora.atualizar()
        break;
        case 3:
        corretora.remove()
        break;
        case 4:
        corretora.listar()
        break;
        case 9:
        return
   
        default:
        console.log('Opção invalida!')
        break;
    }
    }
}
module.exports = menuCorretora