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