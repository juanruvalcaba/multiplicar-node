//requireds
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch((err) => console.log(err))
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ colors.green(archivo) }`))
            .catch((err) => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}
// let parametro = argv[2];
// let base = parametro.split('=')[1];