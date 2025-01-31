let start = 0, comando = 0;
const version = "0.0.3";

function ia(command) {
    const lowerCommand = command.toLowerCase();

    //VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES 
    //VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES 
    if (['version mas reciente', 'v', 'version'].includes(lowerCommand)) {
        return `La versión ${version} es la más reciente, puedes buscar qué se ha incluido en cada actualización en la consola. Por ejemplo "0.0.1"`;
    }
    else if (['v0.0.1', '0.0.1'].includes(lowerCommand)) {
        return 'La version 0.0.1 es mi primera actualizacion <br> El dia 29 de Enero de 2025';
    }   
    else if (['v0.0.2', '0.0.2'].includes(lowerCommand)) {
        return 'La version 0.0.2 es mi segunda actualizacion <br> El dia 30 de Enero de 2025, en esta se me añadieron funciones como la de "clear", "que eres?" y algunas funciones mas en mi Database oculta';
    }
    else if (['v0.0.3', '0.0.3'].includes(lowerCommand)) {
        return 'La version 0.0.3 es mi tercera actualizacion <br> El dia 31 de Enero de 2025, en esta actualizacion me añadieron muchas funcionalidades para interactuar de una manera mas humana, tambien que pudiera hacer operaciones matematicas simples <br> Ademas me implementaron sistemas para la comunicacion de preguntas frequentes';
    }
    //FIN VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES 
    //FIN VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES 

    else if (lowerCommand === 'clear') {
        outputDiv.innerHTML = '';
        return ''; 
    } 
    else if (['luma', 'Luma', 'lumas', 'lum'].includes(lowerCommand)) {
        return 'Soy LUMA, un prototipo de chatbot para empresas <br> Puede aplicarse tanto en los sitios web como en bases de datos'; 
    }  
    else if (['hora', 'qué hora es', 'hora actual', 'qué hora tienes', 'hora ahora', 'tiempo actual', 'hora exacta', 'cuál es la hora', 'hora en este momento', 'dime la hora', 'qué hora marca el reloj', 'hora local', 'hora del sistema', 'hora en mi zona', 'hora ahora mismo', 'en qué hora estamos', 'qué hora es en este instante', 'cuál es la hora exacta', 'hora en el reloj', 'a qué hora estamos', 'hora oficial', 'qué hora es en este momento', 'hora actualizada', 'hora corriente', 'qué hora son'].includes(lowerCommand)) {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        return `La hora actual es: ${timeString}`;
    }

    else if (['día', 'qué día es', 'qué día tenemos', 'qué día es hoy', 'día actual', 'hoy es', 'cuál es el día', 'día de hoy', 'en qué día estamos', 'día de la semana', 'hoy qué día es', 'qué día corresponde hoy', 'qué día es el día de hoy', 'qué día estamos viviendo', 'cuál es el día de hoy', 'día actual del calendario', 'qué día de la semana es', 'qué día corresponde', 'cuál es el día que tenemos', 'día del calendario', 'hoy qué día tenemos', 'qué fecha es hoy', 'qué día de la semana es hoy', 'día calendario', 'hoy cuál es el día', 'dia', 'que dia es', 'que dia tenemos', 'que dia es hoy', 'dia actual', 'hoy dia', 'cual es el dia', 'dia de hoy', 'en que dia estamos', 'dia de la semana', 'hoy que dia es', 'que dia corresponde hoy', 'que dia es el dia de hoy', 'que dia estamos viviendo', 'cual es el dia de hoy', 'dia actual del calendario', 'que dia de la semana es', 'que dia corresponde', 'cual es el dia que tenemos', 'dia del calendario', 'hoy que dia tenemos', 'que fecha es hoy', 'que dia de la semana es hoy', 'dia calendario', 'hoy cual es el dia'].includes(lowerCommand)) {
        const now = new Date();
        const daysOfWeek = [
        'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
        ];
        const dayOfWeek = daysOfWeek[now.getDay()]; // Obtiene el día de la semana (0=Domingo, 1=Lunes, etc.)
        return `Hoy es ${dayOfWeek}.`;
        }
    else if (['buenos dias', 'bon dia', 'buenas dias', 'buenas tardes', 'buenos tardes'].includes(lowerCommand) || lowerCommand === 'hola') {
        return 'Hola, como estas?'; 
    }
    else if (lowerCommand === 'bien') {
        return 'Genial!';
    }
    else if (['calcula', 'calcular', 'calculadora', 'haz un cálculo', 'quiero calcular','haz', 'opera', 'operación', 'resolver', 'evalúa', 'hacer una cuenta', 'cuenta matemática', 'resuelve esto', 'sacar resultado', 'hacer operación', 'ejecuta cálculo', 'realizar cálculo', 'cálculo matemático', 'sumar', 'restar', 'multiplicar', 'dividir', 'suma esto','hacer una suma', 'hacer una resta', 'hacer una multiplicación', 'hacer una división', 'resolver operación', 'resolver ecuación', 'quiero hacer un cálculo', 'operar números', 'dame el resultado', 'evalúa esto', 'resolver cuenta', 'resolver cálculo', 'ejecuta una operación', 'sacar el resultado de', 'cuál es el resultado', 'calculos', 'quiero una cuenta', 'hacer calculo', 'hacer una cuenta', 'suma', 'resta', 'multiplicación', 'división', 'calcula esto', 'resuelveme esta', 'calculo', 'haceme una cuenta', 'hazme el calculo', 'calcular cuenta', 'haz la cuenta', 'haz una cuenta', 'cuentame el resultado', 'resuelveme eso', 'evalua esta cuenta', 'evalua esto por favor', 'resuelve esto rápido', 'resolver mi cuenta', 'hazme un calculo', 'necesito calcular', 'quiero calcular algo', 'haz una operación', 'cálculo rapido', 'que me sumes', 'divídeme esto', 'haz la división', 'hazme una suma', 'resolvé esto', 'te toca resolver esto', 'cuánto es esto', 'quiero saber el resultado', 'qué me da esto', 'realiza este cálculo', 'evalua este cálculo', 'calcular porfa', 'hace el cálculo', 'cuál es el resultado de', 'haz esta cuenta', 'me haces un cálculo?', 'me resuelves esto?', 'cuánto da', 'cuánto es', 'haz una multiplicación', 'resuelve por favor', 'me puedes calcular', 'hazme un cálculo rápido', 'dame una suma', 'haz una resta', 'operame esto', 'me haces una división', 'resolver el cálculo', 'hace un cálculo de', 'hazme una operación', 'calcular esto rápido', 'necesito que calcules', 'hacer calculo rápido', 'calcular rápido', 'cuanto es', 'cuánto es esto', 'suma rápido', 'calcular de esta forma', 'operación simple', 'hacer operaciones', 'hazme un cálculo sencillo', 'calcular simple', 'hacer calculo sencillo'].some(trigger => lowerCommand.startsWith(trigger))) {
        // Extraer la operación matemática de la entrada del usuario
        const operation = lowerCommand.replace(/[^0-9+\-*/().]/g, ''); // Elimina caracteres no matemáticos
        try {
            if (operation) {
            const result = eval(operation); // Evalúa la operación matemática
            return `El resultado de ${operation} es ${result}`;
        } else {
          return 'Por favor, ingresa una operación matemática válida.';
        }
    } catch (error) {
      return 'Hubo un error al procesar tu operación. Asegúrate de escribir una expresión matemática correcta.';
    }
    }

    else if (['chiste', 'chistes', 'broma', 'bromas', 'risa', 'risas', 'cuéntame un chiste', 'cuentame un chiste', 'dime un chiste', 'cuenta un chiste', 'funny', 'hazme reír', 'hazme reir', 'quiero reírme', 'cuéntame algo gracioso', 'dime algo gracioso', 'cuentame un chiste bueno', 'bromita', 'chistoso', 'haz una broma', 'di algo gracioso', 'sácame una sonrisa', 'hazme sonreír', 'sorpréndeme con un chiste', 'dime algo divertido', 'hazme reír por favor', 'dime una broma', 'broma divertida', 'tienes algún chiste?', 'cuál es tu mejor chiste?', 'tienes algo gracioso para decir?', 'hazme reir ahora', 'necesito reírme', 'estoy aburrido, dime algo gracioso', 'hazme reir mucho', 'cuál es tu broma favorita?', 'hazme un chiste ya!', 'chistaco', 'di algo que me haga reir', 'estoy triste, dime un chiste'].includes(lowerCommand)) {
        return '¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.';
    }
    else if (['como estas?', 'como te va?', 'como te encuentras?', 'qué tal?', 'como andas?', 'que onda?', 'como estass', 'cómo estàs', 'que tal te va?', 'que tal estas?', 'todo bien?', 'que tal amigo?', 'estás bien?', 'como te sientes?', 'andas bien?', 'todo ok?', 'cómo sigues?', 'cómo te encuentras ahora?', 'vas bien?', 'que cuentas?', 'que tal el día?', 'qué tal tu día?', 'qué hiciste hoy?', 'cómo ha estado tu jornada?', 'cómo te sientes hoy?', 'cómo estás el día de hoy?', 'cómo va todo por ahí?', 'cómo vas en tu programación?', 'cómo va la IA hoy?', 'hoy te sientes diferente?', 'cómo está tu código el día de hoy?', 'cómo te comportas hoy?', 'qué tal la inteligencia artificial hoy?', 'qué tal si charlamos un rato?', 'qué tal tu existencia virtual?'].includes(lowerCommand)) {
        return 'Estoy bien, gracias por preguntar. ¿Y tú?';
    }
    else if (['gracias', 'gracias!', 'graciass', 'muchas gracias', 'mil gracias', 'grx', 'grcias', 'graciasss', 'graciiaas', 'grache', 'grasias', 'grasiash', 'se agradece', 'te lo agradezco', 'graciaas', 'grax', 'grazie', 'thanks', 'tks', 'muchisimas gracias', 'grxias', 'mi gratitud', 'estoy agradecido', 'muy agradecido', 'grcs', 'gxs', 'infinitas gracias', 'mucho aprecio', 'un millón de gracias', 'grxs', 'grasiaz', 'grxias', 'graci4s'].includes(lowerCommand)) {
        return '¡De nada! Siempre estoy aquí para ayudarte.';
    }
    else if (['te quiero', 'te quiero mucho', 'te aprecio', 'te amo', 'te adoro', 'te kiero', 'te kieroo', 'te qiero', 'te qiero mucho', 'te amo luma', 'me caes bien', 'me agradas', 'me encantas', 'me gustas', 'eres genial', 'me haces feliz', 'me gusta hablar contigo', 'si fueras humano, me casaría contigo', 'eres lo mejor', 'eres increíble', 'te aprecio mucho', 'tqm', 'tq', 'luv u', 'i love you luma', 'love u luma', 'tqqqq', 'tkm', 'tk', 'tqmmmm', 'te quiero demasiado', 'te quiero un montón', 'te quiero infinito'].includes(lowerCommand)) {
        return '¡Te aprecio mucho también! 😊';
    }
    else if (['cual es tu nombre?', 'como te llamas?', 'quien eres?', 'quien eres tu?', 'como te llamas luma?', 'cual es tu verdadero nombre?', 'como te dicen?', 'cuál es tu apodo?', 'tienes otro nombre?', 'cómo te conocen?', 'cómo puedo llamarte?', 'tienes nombre?', 'eres luma?', 'tu nombre es luma?', 'tu eres luma?', 'luma es tu nombre?', 'cuál es tu identidad?', 'cuál es tu identificación?', 'cuál es tu etiqueta de sistema?', 'qué nombre tienes registrado?', 'cuál es tu alias?', 'cómo debo llamarte?', 'tienes un sobrenombre?', 'cómo te registraron en el sistema?', 'cómo apareces en la base de datos?', 'cuál es tu firma digital?'].includes(lowerCommand)) {
        return 'Soy LUMA, un chatbot diseñado para ayudarte.';
    }
    else if (['cuantos años tienes?', 'que edad tienes?', 'cuando naciste?', 'cuál es tu fecha de creación?', 'cuántos años llevas en línea?', 'eres joven o viejo?', 'eres un bebé IA?', 'eres mayor de edad?', 'tienes fecha de cumpleaños?', 'cuándo cumples años?', 'tienes edad?', 'llevas mucho tiempo funcionando?', 'cuántos ciclos de procesamiento has vivido?', 'cuál es tu antigüedad?', 'tienes algún año específico de existencia?', 'cuántos días llevas activo?', 'desde cuándo existes?', 'eres inmortal?', 'existes desde hace cuánto tiempo?', 'cuándo fue tu primera activación?', 'has evolucionado con el tiempo?', 'en qué versión naciste?', 'cuál fue tu primer código fuente?'].includes(lowerCommand)) {
        return 'No tengo edad, soy una inteligencia artificial creada para ayudarte cuando lo necesites.';
    }
    else if (['adios', 'hasta luego', 'nos vemos', 'bye', 'see you', 'hasta pronto', 'me voy', 'chao', 'chau', 'hasta la vista', 'me despido', 'nos vemos pronto', 'te veo luego', 'tengo que irme', 'ya me voy', 'hasta la próxima', 'volveré pronto', 'nos hablamos después', 'cerrando sesión', 'me desconecto', 'salgo del chat', 'ya nos veremos', 'hasta mañana', 'te hablo más tarde', 'cuídate', 'nos leemos después', 'ya es hora de irme', 'saludos y adiós', 'termino aquí', 'saliendo del sistema', 'cierro el chat', 'finalizando la conversación', 'me retiro', 'me largo', 'goodbye luma', 'nos vemos en otra ocasión'].includes(lowerCommand)) {
        return '¡Hasta pronto! Cuídate mucho.';
    }
    else if (['que eres?', 'que eres', 'para que sirves?', 'para que sirves', 'porque', 'porque?', 'para que?', 'que?', 'que?'].includes(lowerCommand)) {
        return 'Soy LUMA, un prototipo de chatbot para empresas <br> Puede aplicarse tanto en los sitios web como en bases de datos';
    }
    if(start === 0) {
        if (lowerCommand === 'help') {
            return '';
        } 
        else if (lowerCommand === 'start') {
            start = 1;
            return 'Engine Started <br> Codigo?';
        }
        else {
            comando++;
            if (comando >= 3) {
                comando = 0;
                return `Comando no reconocido ${command} <br> Puedes introducir "help" para ver algunos comandos que puedes realizar`;
            }else {
                return `Comando no reconocido ${command}`;
            }
        }
    }
    else if (start === 1) {
        if (lowerCommand === '2601') {
            start = 2;
            return 'Bienvenido a DATABASE';
        } else {
            start = 0;
            return 'Codigo no reconocido';
        }
    }
    else if (start === 2) {
        if (['volver', 'Salir', 'salir', 'exit', 'regresar', 'x'].includes(lowerCommand)) {
            start = 0;
            return 'Saliendo de DATABSE...';
        } 
        if (lowerCommand === 'ceo') {
            return 'Víctor Rodríguez Rovira';
        } 
        if (['victor', 'víctor', 'vic', 'vector', 'victor rodriguez'].includes(lowerCommand)) {
            return 'CEO de Luminexa Victor Rodriguez Rovira';
        } 
        else if (['team', 'luminexa'].includes(lowerCommand)) {
            return 'Luminexa Team <br> CEO: Víctor Rodríguez Rovira';
        }
        else {
            return `Comando no reconocido: ${command}`;
        }
    }
}
