let start = 0;
const version = "0.0.2";

function ia(command) {
    if (command.toLowerCase() === 'clear') {
        outputDiv.innerHTML = '';
        return ''; 
    }
    else if (command.toLowerCase() === 'luma' || command.toLowerCase() === 'Luma' || command.toLowerCase() === 'lumas' || command.toLowerCase() === 'lum') {
        return 'Soy LUMA, un prototipo de chatbot para empresas <br> Puede aplicarse tanto en los sitios web como en bases de datos'; 
    }  
    if (command.toLowerCase() === 'buenos dias' || command.toLowerCase() === 'bon dia' || command.toLowerCase() === 'buenas dias' || command.toLowerCase() === 'buenas tardes' || command.toLowerCase() === 'buenos tardes') {
        return 'Hola, como estas?'; 
    }
    else if (command.toLowerCase() === 'hola') {
        return 'Hola, como estas?';
    }
    else if (command.toLowerCase() === 'bien') {
        return 'Genial!';
    }
    if(start === 0) {
        if (command.toLowerCase() === 'help') {
            return '';
        }

        else if (command.toLowerCase() === 'que eres?' || command.toLowerCase() === 'que eres' || command.toLowerCase() === 'para que sirves?' || command.toLowerCase() === 'para que sirves' || command.toLowerCase() === 'porque'|| command.toLowerCase() === 'porque?' || command.toLowerCase() === 'para que?' || command.toLowerCase() === 'que?'|| command.toLowerCase() === 'que?') {
            return 'Soy LUMA, un prototipo de chatbot para empresas <br> Puede aplicarse tanto en los sitios web como en bases de datos';
        }
        else if (command.toLowerCase() === 'v0.0.2' || command.toLowerCase() === '0.0.2') {
            return 'La version 0.0.2 es mi segunda actualizacion <br> El dia 30 de Enero de 2025, en esta se me añadieron funciones como la de "clear", "que eres?" y algunas funciones mas en mi Database oculta';
        }   
        else if (command.toLowerCase() === 'v0.0.1' || command.toLowerCase() === '0.0.1') {
            return 'La version 0.0.1 es mi primera actualizacion <br> El dia 29 de Enero de 2025';
        }   
        else if (command.toLowerCase() === 'version mas reciente' || command.toLowerCase() === 'v' || command.toLowerCase() === 'version') {
            return `La versión ${version} es la más reciente, puedes buscar que se ha incluido en cada actualizacion en la consola. Por ejemplo "0.0.1"`;
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
            return 'Bienvenido a DATABASE';
        } else {
            start = 0;
            return 'Codigo no reconocido';
        }
    }
    else if (start === 2) {
        if (command.toLowerCase() === 'volver' || command.toLowerCase() === 'Salir' || command.toLowerCase() === 'salir' || command.toLowerCase() === 'exit' || command.toLowerCase() === 'regresar' || command.toLowerCase() === 'x') {
            start = 0;
            return 'Saliendo de DATABSE...';
        } 
        if (command.toLowerCase() === 'ceo') {
            return 'Víctor Rodríguez Rovira';
        } 
        if (command.toLowerCase() === 'victor' || command.toLowerCase() === 'víctor' || command.toLowerCase() === 'vic' || command.toLowerCase() === 'vector' || command.toLowerCase() === 'victor rodriguez') {
            return 'CEO de Luminexa Victor Rodriguez Rovira';
        } 
        else if (command.toLowerCase() === 'team' || command.toLowerCase() === 'luminexa') {
            return 'Luminexa Team <br> CEO: Víctor Rodríguez Rovira';
        }
        else {
            return `Comando no reconocido: ${command}`;
        }
    }
}
