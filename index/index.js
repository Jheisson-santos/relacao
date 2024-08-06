const prompt = require('prompt-sync')({sigint: true})
const menuCliente = require('./indexCliente.js');
const menuCorretor = require('./indexCorretor.js');
const menuCorretora = require('./indexCorretora.js')
while(true){
    console.log(`
          _____________________________________
         |                                     |
         |              MENU                   |
         |      1 - Area da Corretora          |
         |      2 - Area do corretor           |
         |      3 - Area do cliente            |  
         |      4 - Area de cadastro de imovel |
         |      9 -       Sair                 |
         |_____________________________________|
         `);
         
    let inp = +prompt('')
    switch(inp){
        case 1:
        menuCorretora()
        break;
        case 2:
        menuCorretor()
        break;
        case 3:
        menuCliente()
        break;
        // case 4:
        // corretora.listar()
        // break;
        case 9:
        process.exit()
        break;
        default:
        console.log('Opção invalida!')
        break;
    }
    }