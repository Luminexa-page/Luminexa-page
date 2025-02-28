let start = 0, comando = 0, explicacion = 0;
const version = "0.0.4";

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
    else if (['v0.0.4', '0.0.4'].includes(lowerCommand)) {
        return 'La version 0.0.4 es mi cuarta actualizacion <br> El dia 4 de Febrero de 2025, <br> en esta actualizacion me incluyeron mejoras para implementarme en otras empresas y asi crear chatbots diferentes dependiendo de que lugar este. Tambien se implemento que al pulsar la flechita hacia arriba se pueda enviar comandos previamente enviados.';
    }
    //FIN VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES 
    //FIN VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES VERSIONES 
    
    //HELPDESK
    else if (lowerCommand === 'help') {
        return '';
    } 
    //FIN HELPDESK

    // IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE 
    // IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE IA BASE 
    else if (lowerCommand === 'clear') {
        outputDiv.innerHTML = '';
        return ''; 
    } 
    else if (['luma', 'Luma', 'lumas', 'lum'].includes(lowerCommand)) {
        return 'Soy LUMA, un prototipo de chatbot para empresas <br> Puede aplicarse tanto en los sitios web como en bases de datos'; 
    }  

    // PREGUNTAS TEMPORALES
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
    // FIN PREGUNTAS TEMPORALES

    //Comportamiento Humano Simple
    else if (['buenos dias', 'bon dia', 'buenas dias', 'buenas tardes', 'buenos tardes'].includes(lowerCommand) || lowerCommand === 'hola') {
        return 'Hola, como estas?'; 
    }
    else if (lowerCommand === 'bien') {
        return 'Genial!';
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
    //FIN Comportamiento Humano Simple

    // LUMA FUNCION SISTEM
    else if (['que eres?', 'que eres', 'para que sirves?', 'para que sirves', 'porque', 'porque?', 'para que?', 'que?', 'que?'].includes(lowerCommand)) {
        explicacion = 1;
        return 'Soy LUMA, un prototipo de chatbot para empresas <br> Puede aplicarse tanto en los sitios web como en bases de datos <br> Si quieres mas informacion dime "mas"';
    }
    else if (explicacion === 1 || explicacion === 2 && ['mas', 'MAS', 'dime mas', 'DIME MAS', 'more'].includes(lowerCommand) ) {
        explicacion = 2;
        return 'LUMA está diseñado para responder de manera clara y precisa las preguntas de los clientes sobre la empresa. Proporciona información detallada y confiable para ayudar a resolver dudas de los clientes. <br> LUMA tiene como objetivo garantizar una experiencia satisfactoria al cliente mediante respuestas rápidas y eficientes';
    }
    // FIN LUMA FUNCION SISTEM

        //Calculo Matematico Simple
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
        // FIN Calculo Matematico Simple


        // IA LUMINEXA IA LUMINEXA IA LUMINEXA IA LUMINEXA IA LUMINEXA IA LUMINEXA IA LUMINEXA IA LUMINEXA IA LUMINEXA IA LUMINEXA IA LUMINEXA IA LUMINEXA IA LUMINEXA IA LUMINEXA IA LUMINEXA IA LUMINEXA 
        else if (['que es luminexa studios', 'que es luminexa', 'para que es luminexa studios','para que es luminexa', 'a que se dedica luminexa studios','que hace luminexa studios','que servicios ofrece luminexa','que tipo de empresa es luminexa','que proyectos desarrolla luminexa','cual es el proposito de luminexa','que es exactamente luminexa studios','cual es la mision de luminexa','que ofrece luminexa studios','q es luminexa','que es luminexa studio','a que se dedica luminexa studio','que hace luminexa studio','que servicios ofrece luminexa studios','que tipo de empresa es luminexa studios','cual es el proposito de luminexa studios','que es exactamente luminexa studio','cual es la mision de luminexa studios?','que ofrece luminexa studio','q es luminexa studios','que es luminesa studios','a que se dedica luminesa studios','que hace luminesa studios','que servicios ofrece luminesa','que tipo de empresa es luminesa','que proyectos desarrolla luminesa','cual es el proposito de luminesa','que es exactamente luminesa studios','cual es la mision de luminesa','que ofrece luminesa studios','q es luminesa','que es lumineza studios','a que se dedica lumineza studios','que hace lumineza studios','que servicios ofrece lumineza','que tipo de empresa es lumineza','que proyectos desarrolla lumineza','cual es el proposito de lumineza','que es exactamente lumineza studios','cual es la mision de lumineza','que ofrece lumineza studios','q es lumineza','k es luminexa','ke es luminexa studios','luminexa q es','luminexa q hace','luminesa q proyectos desarrolla','luminesa q tipo empresa es','luminesa que es exactamente','luminesa cual es su proposito','luminesa que servicios da','luminesa q mision tiene','que es lumnexa studios','que es lumnexa studios','que hac luminexa studios','que hce luminexa studios','a ke se dedica luminexa','que pryectos desarrolla luminexa','que ofrese luminexa studios','¿que es luminexa studios?','que es luminexa studios?',' que es luminexa studios ','¿a que se dedica luminexa studios?','que hace luminexa studios?'].includes(lowerCommand)) {            
            return 'Luminexa es una empresa emergente dedicada al desarrollo de páginas web y videojuegos, con planes de expandirse a ciberseguridad e chatbots como LUMA';
        }
        else if (['ofrecen desarrollo web','ofrecen desarrolo web','ofrecen desarollo web','ofrecen desarrollo web?','pueden hacer una pagina web para mi negocio','pueden hacer una pagina web pa mi negocio','pueden hacer una paguina web para mi negocio','pueden hacer una pagina web pa mi negcio','desarrollan paginas web','desarrollan paginas webs','desarollan paginas web','como puedo contratar un sitio web','como puedo contratrar un sitio web','como puedo contratar un sito web','hacen paginas web personalizadas','hacen paginas web personalisadas','que incluyen en el desarrollo web','que incluye en el desarrollo web','que incliuden en el desarrollo web','luminexa hace diseño web','luminexa hace diseno web','luminexa hase diseño web','puedo pedirles una web','puedo pedirles una pagina web','hacen sitios web','hacen sitos web','luminexa desarrolla webs','luminexa desarrolla web','luminexa desarrolla sitios web','pueden hacerme una web','pueden hacerme una pagina web','desarrollan paginas para negocios','desarrollan paginas para negcios','quiero un sitio web','quiero una pagina web','como contrato una web con luminexa','como contrato una web con luminexa','lumineza puede hacer una web','lumineza puede hacer una pagina web','luminesa desarrolla webs','luminesa desarrolla web','luminesa hace paginas?','luminesa hace paginas','luminexa hace webs?','luminexa hace webs','luminesa ofrece diseño web','luminesa ofrece diseno web','quiero q me hagan una web','quiero que me hagan una web','luminesa desarrolla sitios','luminesa q ofrece en paginas','luminesa que ofrece en paginas','luminesa hace webs personalizadas','luminesa hace paginas web personalizadas'].includes(lowerCommand)) {
             return 'Sí, ofrecemos desarrollo de páginas web personalizadas para negocios y proyectos. Contácta al correo luminexastudios@outlook.es o visita la pagina web de Luminexa para solicitar mas informacion'; 
        }
        else if (['juego?', 'videojuegos?', 'juegos', 'videojuegos','qué tipo de videojuegos hacen?', 'qué juegos han desarrollado?', 'puedo jugar sus videojuegos?', 'dónde encuentro los juegos de luminexa?', 'qué juegos tienen?', 'en qué plataformas publican sus juegos?', 'dónde puedo descargar sus juegos?', 'luminexa hace videojuegos?', 'puedo jugar a sus juegos en itch.io?', 'qué géneros de videojuegos desarrollan?'].includes(lowerCommand)) {
            return 'Desarrollamos videojuegos originales y narrativos. Puedes encontrarlos en nuestra página web y en Itch.io.';
        }
        else if (['cuáles son sus planes futuros?', 'que hara luminexa?', 'como va luminexa', 'futuro luminexa', 'luminexa se expandirá?', 'ofrecerán nuevos servicios?', 'qué proyectos vienen en camino?', 'planean hacer software empresarial?', 'van a entrar en ciberseguridad?', 'qué áreas de desarrollo expandirán?', 'luminexa crecerá?', 'cuál es el futuro de luminexa?', 'qué más harán en el futuro?'].includes(lowerCommand)) {
            return 'Planeamos expandirnos al desarrollo de software empresarial y ciberseguridad, además de seguir creciendo en videojuegos y páginas web.';
        }
        else if (['cómo puedo contratar sus servicios?', 'como contacto luminexa?', 'como contacto a luminexa?', 'como contacto luminexa', 'como contacto a luminexa', 'quiero hacer un proyecto con luminexa', 'cómo los contacto?', 'quiero contratar luminexa studios', 'qué debo hacer para solicitar un servicio?', 'cómo inicio un proyecto con ustedes?', 'cuáles son los pasos para contratar un servicio?', 'luminexa tiene formulario de contacto?', 'cómo puedo empezar un trabajo con luminexa?', 'qué necesito para contratar a luminexa?'].includes(lowerCommand)) {
            return 'Puedes contactarnos a través de nuestro formulario en Tally.so o en nuestras redes para discutir tu proyecto.';
        }
        else if (['dónde puedo seguir sus proyectos?', 'seguir a luminexa', 'como sigo a luminexa', 'seguire a luminexa' ,'como sigo a luminexa?', 'como sigo a luminexa', 'cómo me entero de las novedades de luminexa?', 'tienen redes sociales?', 'cómo puedo recibir actualizaciones?', 'publican noticias sobre sus proyectos?', 'tienen blog o boletín?', 'dónde anuncian sus novedades?', 'puedo seguirlos en alguna plataforma?', 'cómo me entero de sus juegos nuevos?', 'cómo seguir a luminexa studios?'].includes(lowerCommand)) {
            return 'Puedes seguirnos en nuestra página web y nuestro servidor de discord para recibir actualizaciones y noticias de nuestros proyectos.';
        }
        else if (['cómo puedo apoyar a luminexa?', 'tienen patreon?', 'cómo puedo ayudar a luminexa studios?', 'puedo donar a luminexa?', 'qué beneficios obtengo en patreon?', 'luminexa acepta contribuciones?', 'cómo apoyar sus proyectos?', 'tienen membresías premium?', 'puedo aportar económicamente a luminexa?', 'hay formas de contribuir con luminexa?'].includes(lowerCommand)) {
            return 'Puedes apoyarnos a través de Patreon para obtener beneficios exclusivos y ayudarnos a seguir creando contenido.';
        }
        else if (['piensan desarrollar software empresarial?', 'proximos software' , 'nuevas tecnologias', 'proximas tecnologias', 'proximos servicios', 'nuenos servicios', 'servicios LUMA', 'ofrecerán soluciones para empresas?', 'van a hacer software a medida?', 'luminexa trabajará con software corporativo?', 'harán herramientas de software?', 'puedo pedirles software personalizado?', 'luminexa desarrollará software para negocios?', 'tienen planes para software empresarial?', 'harán plataformas empresariales?', 'luminexa se especializará en software profesional?'].includes(lowerCommand)) {
            return 'Sí, en el futuro planeamos ofrecer desarrollo de software empresarial a medida para negocios y organizaciones. LUMA es uno de los servicios de Luminexa para empresas que quieren implementar una mejora en su pagina web o en su base de datos';
        }
        else if (['cómo unirme a su comunidad?', 'puedo colaborar', 'puedo ayudar', 'como veo el progreso', 'como mejora esto', 'como seguira luminexa' ,'como continuara luminexa?', 'puedo colaborar con luminexa?', 'cómo formar parte de luminexa?', 'aceptan voluntarios o colaboradores?', 'puedo trabajar en sus proyectos?', 'tienen comunidad en discord?', 'cómo participo en luminexa?', 'aceptan desarrolladores?', 'me gustaría ser parte de su equipo?', 'puedo ayudar con sus proyectos?'].includes(lowerCommand)) {
            return 'Puedes unirte a nuestra comunidad en Discord, donde compartimos avances, ideas y colaboramos en proyectos.';
        }
        else if (['qué hace diferente a luminexa?','porque luminexa?','porque luminexa',  'qué los distingue de otras empresas?', 'por qué elegir luminexa?', 'qué los hace únicos?', 'por qué debería trabajar con luminexa?', 'qué filosofía tiene luminexa?', 'cuál es el valor de luminexa?', 'qué ofrecen que otros no tengan?', 'qué caracteriza a luminexa?', 'qué visión tienen como empresa?'].includes(lowerCommand)) {
            return 'Nos diferenciamos por nuestro enfoque en la creatividad, innovación y personalización de cada proyecto, ofreciendo experiencias únicas.';
        }
    // FIN IA LUMINEXA FIN IA LUMINEXA FIN IA LUMINEXA FIN IA LUMINEXA FIN IA LUMINEXA FIN IA LUMINEXA FIN IA LUMINEXA FIN IA LUMINEXA FIN IA LUMINEXA FIN IA LUMINEXA FIN IA LUMINEXA FIN IA LUMINEXA FIN IA LUMINEXA FIN IA LUMINEXA 
    
    // IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE 
    // IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE 

    // FIN FIN IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE 
    // FIN FIN IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE IA CLIENTE 

    // DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE 
    // DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE DATABASE 
    if(start === 0) {  
        if (lowerCommand === 'start') {
            start = 1;
            return 'Engine Started <br> Codigo?';
        }
        else {
            comando++;
            if (comando >= 3) {
                comando = 0;
                return `No entiendo: ${command} <br> Puedes introducir "help" para ver algunos comandos que puedes realizar`;
            }else {
                return `No entiendo: ${command}`;
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
    // FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE 
    // FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE FIN DATABASE 
}
