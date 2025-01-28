let start = 0;
const version = "0.0.1";

function ia(command) {
    if(start === 0) {
        if (command.toLowerCase() === 'hola') {
            return 'Hola, como estas?';
        }
        else if (command.toLowerCase() === 'v0.0.1' || command.toLowerCase() === '0.0.1') {
            return 'La version 0.0.1 es mi primera actualizacion <br> De ahi naci, el dia 29 de Enero de 2025';
        }  
        else if (command.toLowerCase() === 'version mas reciente' || command.toLowerCase() === 'v' || command.toLowerCase() === 'version') {
            return `La versión ${version} es la más reciente`;
        }  
        else if (command.toLowerCase() === 'start') {
            start = 1;
            return 'Engine Started <br> Codigo?';
        }
        else {
            return `Comando no reconocido: ${command}`;
        }
    }
    else if (start === 1) {
        if (command.toLowerCase() === '2601') {
            start = 2;
            return 'Bienvenido, Víctor Rodríguez a DATABASE <br> CEO ACCESS';
        } else {
            return 'Codigo no reconocido';
        }
    }
    else if (start === 2) {
        if (command.toLowerCase() === 'ceo') {
            return 'Víctor Rodríguez Rovira';
        } 
        else if (command.toLowerCase() === 'team' || command.toLowerCase() === 'luminexa') {
            return 'Luminexa Team <br> CEO: Víctor Rodríguez Rovira';
        }
        else {
            return `Comando no reconocido: ${command}`;
        }
    }
}
