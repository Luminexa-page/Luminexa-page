// script.js
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

