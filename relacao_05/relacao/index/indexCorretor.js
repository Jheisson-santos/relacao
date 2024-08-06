const prompt = require('prompt-sync')({sigint: true})
const corretor = require('../modulos/corretor.js')
const menuCorretor = ()=>{

while(true){
    console.log(`
          _____________________________________
         |                                     |
         |          MENU DO CORRETOR           |
         |      1 - Adicionar corretor         |
         |      2 - Editar corretor            |
         |      3 - Remover corretor           |  
         |      4 - Listar corretores          |
         |      9 -       Sair                 |
         |_____________________________________|
         `);
         
    let inp = +prompt('')
    switch(inp){
        case 1:
        corretor.addCorretor()
        break;
        case 2:
        corretor.atualizar()
        break;
        case 3:
        corretor.remove()
        break;
        case 4:
        corretor.listar()
        break;
        case 9:
        return
   
        default:
        console.log('Opção invalida!')
        break;
    }
    }
}
module.exports = menuCorretor