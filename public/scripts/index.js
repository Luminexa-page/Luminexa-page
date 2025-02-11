// script.js
// Funcionamiento de el footer
window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var scrollPosition = window.scrollY + window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight * 0.9) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
});

// Boton COPY TO CLIPBOARD de nosotros.html
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.copy').forEach(button => {
        button.addEventListener('click', () => {
            const textToCopy = "luminexastudios@outlook.es";
            if (document.hasFocus()) {
                navigator.clipboard.writeText(textToCopy)
            } else {
                alert("Asegúrate de que la ventana esté activa para copiar.");
            }
        });
    });
});

// Agregar un evento para detectar cambios
// Seleccionar el input del tema
const themeToggle = document.getElementById('theme');
const logo = document.getElementById('logo');
const subtitle = document.getElementById('main-subtitle');
const webCustomText = document.querySelectorAll('.text-above-button');
const gamesStudioText = document.querySelectorAll('.text-above-button1');

const imageLeft = document.querySelector('.image-left');
const imageRight = document.querySelector('.image-right');
const noticias = document.querySelectorAll('.noticia');
const newsHeader = document.getElementById('news-header');
const newsTitle = document.getElementById('news-1-title');

const copyrightText = document.getElementById('copyright');
const versionText = document.getElementById('version');

// Función para activar el modo oscuro
function enableDarkMode() {
    document.body.style.backgroundColor = '#000'; // Fondo negro
    document.body.style.color = '#fff'; // Texto blanco

    logo.src = 'public/images/Logo Luminexa (Blanco).png'; // Logo para el modo oscuro
    subtitle.style.color = '#fff'; // Texto blanco en modo oscuro
    
    webCustomText.forEach(p => {
        p.style.color = '#fff'; // Texto blanco en modo oscuro
    });
    gamesStudioText.forEach(p => {
        p.style.color = '#fff'; // Texto blanco en modo oscuro
    });

    document.getElementById('decorative-frame').style.backgroundColor = '#ba9b5b'; // Dorado en modo oscuro
    document.getElementById('tablon-noticias').style.backgroundColor = '#1a1a1a'; // Color corcho oscuro


    imageRight.style.backgroundColor = ' #333'; // Color corcho para el fondo del padding en modo claro
    imageLeft.style.backgroundColor = ' #333'; // Color corcho para el fondo del padding en modo claro

    noticias.forEach(noticia => {
        noticia.style.backgroundColor = '#2a2a2a'; // Azul en modo claro
    });

    newsHeader.style.color = '#ba9b5b'; // Color dorado en modo oscuro
    newsTitle.style.color = '#ba9b5b'; // Dorado

    copyrightText.style.color = '#fff'; // Texto blanco en modo oscuro
    versionText.style.color = '#fff'; // Texto blanco en modo oscuro

    document.querySelector('.navbar').style.backgroundColor = '#444444';  // Fondo oscuro en modo oscuro
    document.querySelector('.header').style.backgroundColor = '#444444';  // Fondo más oscuro en header

    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.style.color = '#fff'; // Blanco
    });
}

// Función para activar el modo claro
function enableLightMode() {
    document.body.style.backgroundColor = '#fff'; // Fondo blanco
    document.body.style.color = '#000'; // Texto negro

    logo.src = 'public/images/Logo Luminexa (Blanco)2.png'; // Logo para el modo claro
    subtitle.style.color = '#003366'; // Texto negro en modo claro

    webCustomText.forEach(p => {
        p.style.color = '#003366'; // Texto negro en modo claro
    });
    gamesStudioText.forEach(p => {
        p.style.color = '#003366'; // Texto negro en modo claro
    });

    document.getElementById('decorative-frame').style.backgroundColor = '#00f'; // Azul en modo claro
    document.getElementById('tablon-noticias').style.backgroundColor = '#D1B28C'; // Color corcho (beige)

    imageRight.style.backgroundColor = '#D1B28C'; // Color corcho para el fondo del padding en modo claro
    imageLeft.style.backgroundColor = '#D1B28C'; // Color corcho para el fondo del padding en modo claro

    noticias.forEach(noticia => {
        noticia.style.backgroundColor = '#5dade2'; // Azul en modo claro
    });

    newsHeader.style.color = '#003366'; // Color dorado más suave en modo claro
    newsTitle.style.color = '#003366'; // Azul marino

    copyrightText.style.color = '#000'; // Texto negro en modo claro
    versionText.style.color = '#000'; // Texto negro en modo claro

    document.querySelector('.navbar').style.backgroundColor = '#dcdcdc';  // Gris claro en modo claro
    document.querySelector('.header').style.backgroundColor = '#dcdcdc';  // Gris muy claro en header

    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.style.color = '#003366'; // Azul claro
    });
}

// Escuchar los cambios en el checkbox
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        enableDarkMode(); // Activar modo oscuro
    } else {
        enableLightMode(); // Activar modo claro
    }
});

window.addEventListener('scroll', function() {
    const frame = document.getElementById('decorative-frame');
    const scrollHeight = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calcular la altura proporcional del scroll
    const height = ((scrollHeight / documentHeight) * 100) + "%";
    frame.style.height = height; // Aplicar la altura calculada
});
